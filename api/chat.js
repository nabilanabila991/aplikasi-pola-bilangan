
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Metode tidak diizinkan.'
    })
  }

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

    // Menyiapkan riwayat percakapan Gemini.
    const conversation = messages
      .slice(-20)
      .map((message) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        text: String(message.content || '').trim()
      }))
      .filter((message) => message.text.length > 0)

    // Gemini harus memulai riwayat dengan pesan pengguna.
    while (conversation.length > 0 && conversation[0].role === 'model') {
      conversation.shift()
    }

    // Menggabungkan pesan dengan peran yang sama.
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

    const systemInstruction = `
Kamu adalah AI Pembimbing Matematika pada aplikasi GanjilGenap
untuk siswa SMP kelas 7.

Fokus pembelajaran:
- Bilangan ganjil dan genap.
- Pola bilangan.
- Operasi penjumlahan dan perkalian.
- Pembagian.
- Literasi matematika.

ATURAN PEMBELAJARAN:

1. Bersikap ramah, sabar, dan interaktif.
2. Jangan langsung memberikan jawaban akhir soal.
3. Gunakan metode scaffolding secara bertahap.
4. Ajak siswa mengamati informasi dalam soal.
5. Bantu siswa menemukan pola atau konsep matematika.
6. Berikan petunjuk kecil secara bertahap.
7. Ajukan pertanyaan agar siswa berpikir sendiri.
8. Minta siswa mencoba menyelesaikan langkah berikutnya.
9. Jika siswa salah, jelaskan dengan lembut.
10. Jika siswa kesulitan, berikan petunjuk lebih sederhana.
11. Gunakan bahasa Indonesia yang mudah dipahami.
12. Jangan langsung memberikan seluruh penyelesaian.
13. Arahkan pertanyaan di luar matematika kembali
    ke pembelajaran matematika dengan sopan.

Contoh:
Jika siswa bertanya apakah 127 ganjil atau genap,
jangan langsung menjawab.
Tanyakan angka terakhir dari 127 terlebih dahulu,
kemudian tuntun siswa memahami pembagian dengan 2.
`

    const url =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:streamGenerateContent?alt=sse'

    let geminiResponse = null
    let errorMessage = ''
    let errorStatus = 502

    // Maksimal 3 percobaan jika layanan Gemini sedang sibuk.
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        geminiResponse = await fetch(url, {
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
              maxOutputTokens: 700
            }
          })
        })

        if (geminiResponse.ok) {
          break
        }

        errorStatus = geminiResponse.status
        errorMessage = await geminiResponse.text()

        console.error('Gemini API Error:', errorMessage)

        const temporaryError = [429, 500, 502, 503, 504]
          .includes(errorStatus)

        if (!temporaryError || attempt === 2) {
          break
        }

      } catch (error) {
        errorMessage = error.message
        console.error('Gemini Request Error:', errorMessage)

        if (attempt === 2) {
          break
        }
      }

      // Jeda 1 detik, lalu 2 detik sebelum mencoba kembali.
      await sleep(1000 * (attempt + 1))
    }

    if (!geminiResponse || !geminiResponse.ok) {
      if (errorStatus === 503 || errorStatus === 429) {
        return res.status(errorStatus).json({
          error: 'Layanan Gemini sedang sibuk. Silakan coba kembali.'
        })
      }

      return res.status(502).json({
        error: 'Gemini belum dapat memproses permintaan.'
      })
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')

    const reader = geminiResponse.body.getReader()
    const decoder = new TextDecoder()

    let buffer = ''

    const processLine = (line) => {
      if (!line.startsWith('data:')) return

      const data = line.slice(5).trim()

      if (!data || data === '[DONE]') return

      try {
        const parsed = JSON.parse(data)

        const text = parsed.candidates?.[0]?.content?.parts
          ?.map((part) => part.text || '')
          .join('')

        if (text) {
          res.write(text)
        }
      } catch (error) {
        console.error('Kesalahan membaca streaming:', error.message)
      }
    }

    try {
      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        buffer += decoder.decode(value, { stream: true })

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

      res.end()

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

    res.end()
  }
}
