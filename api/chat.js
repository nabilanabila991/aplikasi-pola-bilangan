
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
    const { messages } = req.body

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Pesan tidak valid.'
      })
    }

    const contents = messages.slice(-20).map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(message.content || '') }]
    }))

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
10. Jika siswa kesulitan, berikan petunjuk yang lebih sederhana.
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

    const geminiResponse = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse',
      {
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
            temperature: 0.6,
            maxOutputTokens: 700
          }
        })
      }
    )

    if (!geminiResponse.ok) {
      const error = await geminiResponse.text()
      console.error('Gemini API Error:', error)

      return res.status(502).json({
        error: 'Asisten sedang bermasalah.'
      })
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')

    const reader = geminiResponse.body.getReader()
    const decoder = new TextDecoder()

    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      buffer += decoder.decode(value, { stream: true })

      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue

        const data = line.slice(6).trim()

        if (!data || data === '[DONE]') continue

        try {
          const parsed = JSON.parse(data)

          const text = parsed.candidates?.[0]?.content?.parts
            ?.map(part => part.text || '')
            .join('')

          if (text) {
            res.write(text)
          }
        } catch (error) {
          console.error('Kesalahan membaca streaming:', error)
        }
      }
    }

    buffer += decoder.decode()

    res.end()

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
