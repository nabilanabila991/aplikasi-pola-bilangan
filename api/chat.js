
const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const MODEL = 'gemini-3.5-flash-lite'

const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`

export default async function handler(req, res) {
  // Memastikan permintaan menggunakan POST.
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Metode tidak diizinkan.'
    })
  }

  // Menggunakan API Key yang sudah ada di Vercel.
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return res.status(500).json({
      error: 'API Key belum dikonfigurasi.'
    })
  }

  try {
    const { messages } = req.body || {}

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Pesan tidak valid.'
      })
    }

    // Membatasi riwayat agar permintaan lebih ringan.
    const conversation = messages
      .slice(-12)
      .map((message) => ({
        role:
          message.role === 'assistant' ? 'model' : 'user',
        text: String(message.content || '').trim()
      }))
      .filter((message) => message.text.length > 0)

    // Percakapan harus dimulai dari pesan pengguna.
    while (
      conversation.length > 0 &&
      conversation[0].role === 'model'
    ) {
      conversation.shift()
    }

    // Menyusun riwayat percakapan.
    const contents = []

    for (const message of conversation) {
      const last = contents[contents.length - 1]

      if (last && last.role === message.role) {
        last.parts[0].text += '\n' + message.text
      } else {
        contents.push({
          role: message.role,
          parts: [{ text: message.text }]
        })
      }
    }

    if (
      contents.length === 0 ||
      contents[contents.length - 1].role !== 'user'
    ) {
      return res.status(400).json({
        error: 'Pesan pengguna tidak ditemukan.'
      })
    }

    // Instruksi AI Pembimbing Matematika.
    const systemInstruction = `
Kamu adalah Kak Aritma, AI Pembimbing Matematika
pada aplikasi GanjilGenap untuk siswa SMP kelas 7.

Fokus pembelajaran:
- Bilangan ganjil dan genap.
- Pola bilangan.
- Penjumlahan dan perkalian.
- Pembagian.
- Literasi matematika.

Aturan pembelajaran:
1. Bersikap ramah, sabar, dan interaktif.
2. Gunakan bahasa Indonesia sederhana.
3. Bimbing siswa secara bertahap.
4. Jangan langsung memberikan jawaban akhir.
5. Ajak siswa mengamati informasi pada soal.
6. Berikan petunjuk kecil agar siswa berpikir.
7. Ajukan satu pertanyaan sederhana dalam satu waktu.
8. Jika siswa salah, jelaskan dengan lembut.
9. Jika siswa kesulitan, berikan contoh sederhana.
10. Arahkan pembicaraan kembali ke matematika
    jika pertanyaan tidak berkaitan dengan pembelajaran.

Contoh:
Jika siswa bertanya apakah 127 ganjil atau genap,
tanyakan terlebih dahulu angka terakhir dari 127.
Kemudian bimbing siswa menentukan jawabannya.
`

    let geminiResponse = null

    // Maksimal dua percobaan untuk gangguan sementara.
    for (let attempt = 0; attempt < 2; attempt++) {
      let response

      try {
        response = await fetch(GEMINI_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            contents,
            generationConfig: {
              maxOutputTokens: 350,
              thinkingConfig: {
                thinkingLevel: 'minimal'
              }
            }
          })
        })
      } catch (error) {
        console.error('Koneksi Gemini gagal:', error.message)

        if (attempt === 0) {
          await sleep(500)
          continue
        }

        return res.status(502).json({
          error: 'Koneksi ke Gemini gagal. Silakan coba kembali.'
        })
      }

      if (response.ok) {
        geminiResponse = response
        break
      }

      const errorDetails = await response.text()

      console.error(
        'Gemini API Error:',
        response.status,
        errorDetails
      )

      // Mencoba satu kali lagi jika layanan sedang sibuk.
      if (
        [429, 503].includes(response.status) &&
        attempt === 0
      ) {
        await sleep(700)
        continue
      }

      if (response.status === 429 || response.status === 503) {
        return res.status(503).json({
          error: 'Gemini sedang sibuk. Silakan coba kembali.'
        })
      }

      if (response.status === 403) {
        return res.status(502).json({
          error: 'Akses API Gemini ditolak. Periksa konfigurasi API Key.'
        })
      }

      if (response.status === 404) {
        return res.status(502).json({
          error: 'Model Gemini tidak ditemukan.'
        })
      }

      return res.status(502).json({
        error: 'Gemini gagal memproses pesan.'
      })
    }

    if (!geminiResponse || !geminiResponse.body) {
      return res.status(502).json({
        error: 'Gemini tidak memberikan respons.'
      })
    }

    // Mengaktifkan respons streaming.
    res.setHeader(
      'Content-Type',
      'text/plain; charset=utf-8'
    )
    res.setHeader(
      'Cache-Control',
      'no-cache, no-transform'
    )
    res.setHeader(
      'Connection',
      'keep-alive'
    )

    if (typeof res.flushHeaders === 'function') {
      res.flushHeaders()
    }

    const reader = geminiResponse.body.getReader()
    const decoder = new TextDecoder()

    let buffer = ''

    // Membaca setiap potongan jawaban dari Gemini.
    function processLine(line) {
      if (!line.startsWith('data:')) return

      const data = line.slice(5).trim()

      if (!data || data === '[DONE]') return

      try {
        const parsed = JSON.parse(data)

        const parts =
          parsed.candidates?.[0]?.content?.parts || []

        const answer = parts
          .filter((part) => !part.thought)
          .map((part) => part.text || '')
          .join('')

        if (answer && !res.destroyed) {
          res.write(answer)
        }
      } catch (error) {
        console.error(
          'Kesalahan membaca streaming:',
          error.message
        )
      }
    }

    try {
      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        buffer += decoder.decode(value, {
          stream: true
        })

        const lines = buffer.split(/\r?\n/)
        buffer = lines.pop() || ''

        for (const line of lines) {
          processLine(line)
        }
      }

      buffer += decoder.decode()

      if (buffer.trim()) {
        processLine(buffer.trim())
      }

      if (!res.destroyed) {
        res.end()
      }
    } finally {
      reader.releaseLock()
    }

  } catch (error) {
    console.error('Chatbot Error:', error)

    if (!res.headersSent) {
      return res.status(500).json({
        error: 'Asisten sedang bermasalah.'
      })
    }

    if (!res.destroyed) {
      res.end()
    }
  }
}
