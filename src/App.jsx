
import { useState } from 'react'
import '../style.css'

const daftarSoal = [
  {
    pertanyaan: 'Hasil dari 125 + 237 termasuk bilangan apa?',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Genap',
    pembahasan: '125 + 237 = 362. Karena 362 habis dibagi 2, maka termasuk bilangan genap.'
  },
  {
    pertanyaan: 'Hasil dari 15 × 13 termasuk bilangan apa?',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Ganjil',
    pembahasan: '15 × 13 = 195. Karena 195 tidak habis dibagi 2, maka termasuk bilangan ganjil.'
  },
  {
    pertanyaan: 'Hasil dari 248 − 135 termasuk bilangan apa?',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Ganjil',
    pembahasan: '248 − 135 = 113. Bilangan 113 termasuk bilangan ganjil.'
  },
  {
    pertanyaan: 'Pola 3, 6, 9, 12, 15, ... Bilangan berikutnya adalah?',
    pilihan: ['17', '18', '19', '20'],
    jawaban: '18',
    pembahasan: 'Pola bertambah 3 setiap langkah. Jadi, 15 + 3 = 18.'
  },
  {
    pertanyaan: 'Hasil dari 24 × 17 termasuk bilangan apa?',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Genap',
    pembahasan: '24 × 17 = 408. Karena 408 habis dibagi 2, maka termasuk bilangan genap.'
  },
  {
    pertanyaan: 'Jika dua bilangan ganjil dijumlahkan, hasilnya selalu ...',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Genap',
    pembahasan: 'Contohnya 5 + 7 = 12. Jumlah dua bilangan ganjil selalu menghasilkan bilangan genap.'
  },
  {
    pertanyaan: 'Manakah pasangan bilangan yang keduanya ganjil?',
    pilihan: ['12 dan 17', '21 dan 35', '14 dan 19', '20 dan 23'],
    jawaban: '21 dan 35',
    pembahasan: '21 dan 35 sama-sama tidak habis dibagi 2, sehingga keduanya merupakan bilangan ganjil.'
  },
  {
    pertanyaan: 'Hasil dari 125 × 8 + 17 termasuk bilangan apa?',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Ganjil',
    pembahasan: '125 × 8 + 17 = 1000 + 17 = 1017. Bilangan 1017 termasuk ganjil.'
  },
  {
    pertanyaan: 'Bilangan yang jika dibagi 2 bersisa 0 termasuk ...',
    pilihan: ['Ganjil', 'Genap'],
    jawaban: 'Genap',
    pembahasan: 'Bilangan genap adalah bilangan yang habis dibagi 2 atau memiliki sisa pembagian 0.'
  },
  {
    pertanyaan: '35 permen dibagikan sama banyak kepada 2 orang. Apakah bisa tanpa sisa?',
    pilihan: ['Bisa', 'Tidak bisa'],
    jawaban: 'Tidak bisa',
    pembahasan: '35 merupakan bilangan ganjil. Jika dibagikan kepada 2 orang, akan tersisa 1 permen.'
  }
]

function App() {
  const [angka, setAngka] = useState('')
  const [hasil, setHasil] = useState('')
  const [warnaHasil, setWarnaHasil] = useState('')
  const [nomorSoal, setNomorSoal] = useState(0)
  const [nilai, setNilai] = useState(0)
  const [jawabanDipilih, setJawabanDipilih] = useState('')
  const [sudahMenjawab, setSudahMenjawab] = useState(false)
  const [riwayatJawaban, setRiwayatJawaban] = useState([])
  const [selesai, setSelesai] = useState(false)

  function periksaAngka() {
    if (angka.trim() === '') {
      setHasil('Silakan masukkan bilangan terlebih dahulu!')
      setWarnaHasil('red')
      return
    }

    const bilangan = Number(angka)

    if (!Number.isSafeInteger(bilangan)) {
      setHasil('Masukkan bilangan bulat yang valid!')
      setWarnaHasil('red')
      return
    }

    setHasil(
      bilangan % 2 === 0
        ? `${bilangan} adalah bilangan genap.`
        : `${bilangan} adalah bilangan ganjil.`
    )
    setWarnaHasil('green')
  }

  function jawabKuis(pilihan) {
    if (sudahMenjawab) return

    const soalSekarang = daftarSoal[nomorSoal]
    const benar = pilihan === soalSekarang.jawaban

    setJawabanDipilih(pilihan)
    setSudahMenjawab(true)

    if (benar) {
      setNilai((nilaiSebelumnya) => nilaiSebelumnya + 10)
    }

    setRiwayatJawaban((riwayatSebelumnya) => [
      ...riwayatSebelumnya,
      {
        pertanyaan: soalSekarang.pertanyaan,
        pilihan,
        jawaban: soalSekarang.jawaban,
        benar,
        pembahasan: soalSekarang.pembahasan
      }
    ])
  }

  function soalBerikutnya() {
    if (nomorSoal < daftarSoal.length - 1) {
      setNomorSoal((nomorSebelumnya) => nomorSebelumnya + 1)
      setJawabanDipilih('')
      setSudahMenjawab(false)
    } else {
      setSelesai(true)
    }
  }

  function ulangiKuis() {
    setNomorSoal(0)
    setNilai(0)
    setJawabanDipilih('')
    setSudahMenjawab(false)
    setRiwayatJawaban([])
    setSelesai(false)
  }

  const soal = daftarSoal[nomorSoal]

  return (
    <>
      <nav className="navbar">
        <h2>GanjilGenap</h2>

        <div className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#tujuan">Tujuan</a>
          <a href="#materi">Materi</a>
          <a href="#contoh-soal">Contoh Soal</a>
          <a href="#latihan">Latihan</a>
          <a href="#kuis">Kuis</a>
          <a href="#tentang">Tentang</a>
        </div>
      </nav>

      <header id="beranda" className="hero">
        <div className="hero-content">
          <p className="label-hero">
            BELAJAR MATEMATIKA JADI MENYENANGKAN
          </p>

          <h1>Yuk, Kenali Bilangan Ganjil dan Genap!</h1>

          <p>
            Belajar mengenal, memahami, dan membedakan bilangan ganjil dan
            genap dengan cara yang mudah dan menyenangkan.
          </p>

          <a href="#tujuan" className="tombol">
            Mulai Belajar
          </a>
        </div>

        <div className="ilustrasi-angka">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className={`angka ${
                n % 2 === 0 ? 'angka-genap' : 'angka-ganjil'
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      </header>

      <section id="tujuan" className="tujuan">
        <h2>Tujuan Pembelajaran</h2>
        <p>Setelah mempelajari materi ini, siswa diharapkan mampu:</p>

        <div className="tujuan-container">
          <div className="tujuan-card">
            <div className="ikon-tujuan">📚</div>
            <h3>Memahami</h3>
            <p>Memahami pengertian bilangan ganjil dan genap.</p>
          </div>

          <div className="tujuan-card">
            <div className="ikon-tujuan">🔍</div>
            <h3>Membedakan</h3>
            <p>
              Membedakan bilangan ganjil dan genap berdasarkan ciri-cirinya.
            </p>
          </div>

          <div className="tujuan-card">
            <div className="ikon-tujuan">✏️</div>
            <h3>Menerapkan</h3>
            <p>
              Menerapkan konsep bilangan ganjil dan genap dalam kehidupan
              sehari-hari.
            </p>
          </div>
        </div>
      </section>

      <section id="materi">
        <h2>Mengenal Bilangan Ganjil dan Genap</h2>

        <p>
          Bilangan ganjil dan genap merupakan bagian dari bilangan bulat yang
          dapat dibedakan berdasarkan hasil pembagian dengan angka 2.
        </p>

        <div className="kartu-container">
          <div className="kartu">
            <h3>Bilangan Genap</h3>
            <p>Bilangan yang habis dibagi 2 tanpa sisa.</p>
            <p className="contoh">
              Contoh: 2, 4, 6, 8, 10, 12, ...
            </p>
          </div>

          <div className="kartu">
            <h3>Bilangan Ganjil</h3>
            <p>Bilangan yang jika dibagi 2 memiliki sisa 1.</p>
            <p className="contoh">
              Contoh: 1, 3, 5, 7, 9, 11, ...
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Ciri-Ciri Bilangan Ganjil dan Genap</h2>

        <div className="kartu-container">
          <div className="kartu">
            <h3>Bilangan Genap</h3>
            <p>Angka terakhirnya adalah 0, 2, 4, 6, atau 8.</p>
            <p className="contoh">Contoh: 12, 24, 36, 48, 100.</p>
          </div>

          <div className="kartu">
            <h3>Bilangan Ganjil</h3>
            <p>Angka terakhirnya adalah 1, 3, 5, 7, atau 9.</p>
            <p className="contoh">Contoh: 11, 23, 35, 47, 99.</p>
          </div>
        </div>
      </section>

      <section className="cara-membedakan">
        <h2>Cara Menentukan Bilangan Ganjil dan Genap</h2>
        <p>Perhatikan angka terakhir dari suatu bilangan.</p>

        <div className="tabel-container">
          <table>
            <thead>
              <tr>
                <th>Angka Terakhir</th>
                <th>Jenis Bilangan</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>0, 2, 4, 6, 8</td>
                <td>Genap</td>
              </tr>
              <tr>
                <td>1, 3, 5, 7, 9</td>
                <td>Ganjil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Contoh: 124 berakhiran 4, sehingga termasuk bilangan genap.
          Sementara 137 berakhiran 7, sehingga termasuk bilangan ganjil.
        </p>
      </section>

      <section>
        <h2>Sifat Operasi Bilangan Ganjil dan Genap</h2>

        <div className="tabel-container">
          <table>
            <thead>
              <tr>
                <th>Operasi</th>
                <th>Hasil</th>
                <th>Contoh</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Genap + Genap</td>
                <td>Genap</td>
                <td>2 + 4 = 6</td>
              </tr>
              <tr>
                <td>Ganjil + Ganjil</td>
                <td>Genap</td>
                <td>3 + 5 = 8</td>
              </tr>
              <tr>
                <td>Ganjil + Genap</td>
                <td>Ganjil</td>
                <td>3 + 4 = 7</td>
              </tr>
              <tr>
                <td>Genap × Bilangan Bulat</td>
                <td>Genap</td>
                <td>4 × 3 = 12</td>
              </tr>
              <tr>
                <td>Ganjil × Ganjil</td>
                <td>Ganjil</td>
                <td>3 × 5 = 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Penerapan dalam Kehidupan Sehari-hari</h2>

        <div className="kartu-container">
          <div className="kartu">
            <h3>Nomor Rumah</h3>
            <p>
              Nomor rumah pada satu sisi jalan sering menggunakan bilangan
              ganjil, sedangkan sisi lainnya menggunakan bilangan genap.
            </p>
          </div>

          <div className="kartu">
            <h3>Nomor Peserta</h3>
            <p>
              Nomor peserta dapat dikelompokkan menjadi nomor ganjil dan
              nomor genap.
            </p>
          </div>

          <div className="kartu">
            <h3>Membagi Benda</h3>
            <p>
              Sepuluh pensil dapat dibagi sama banyak kepada dua orang tanpa
              sisa.
            </p>
          </div>
        </div>
      </section>

      <section id="contoh-soal">
        <h2>Contoh Soal dan Pembahasan</h2>

        <div className="kartu-container">
          <div className="kartu">
            <h3>Contoh Soal 1</h3>
            <p>Apakah 16 termasuk bilangan ganjil atau genap?</p>
            <p className="contoh">
              Jawaban: 16 adalah bilangan genap karena habis dibagi 2.
            </p>
          </div>

          <div className="kartu">
            <h3>Contoh Soal 2</h3>
            <p>Apakah 25 termasuk bilangan ganjil atau genap?</p>
            <p className="contoh">
              Jawaban: 25 adalah bilangan ganjil karena jika dibagi 2
              bersisa 1.
            </p>
          </div>

          <div className="kartu">
            <h3>Contoh Soal 3</h3>
            <p>Tentukan jenis bilangan dari 42 + 17.</p>
            <p className="contoh">
              Jawaban: 42 + 17 = 59, termasuk bilangan ganjil.
            </p>
          </div>

          <div className="kartu">
            <h3>Contoh Soal 4</h3>
            <p>Tentukan jenis bilangan dari 8 × 6.</p>
            <p className="contoh">
              Jawaban: 8 × 6 = 48, termasuk bilangan genap.
            </p>
          </div>

          <div className="kartu">
            <h3>Contoh Soal 5</h3>
            <p>Bagaimana hasil penjumlahan dua bilangan ganjil?</p>
            <p className="contoh">
              Jawaban: Hasilnya selalu genap. Contoh: 5 + 7 = 12.
            </p>
          </div>

          <div className="kartu">
            <h3>Contoh Soal 6</h3>
            <p>Apakah 31 dapat dibagi sama rata kepada dua orang?</p>
            <p className="contoh">
              Jawaban: Tidak, karena 31 adalah bilangan ganjil.
            </p>
          </div>
        </div>
      </section>

      <section id="latihan">
        <h2>Yuk, Berlatih!</h2>

        <p>
          Masukkan sebuah bilangan bulat untuk mengetahui apakah bilangan
          tersebut ganjil atau genap.
        </p>

        <div className="area-latihan">
          <input
            type="number"
            value={angka}
            onChange={(event) => setAngka(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') periksaAngka()
            }}
            placeholder="Masukkan angka"
          />

          <button onClick={periksaAngka}>Periksa</button>

          <p
            id="hasil"
            style={{ color: warnaHasil }}
            aria-live="polite"
          >
            {hasil}
          </p>
        </div>
      </section>

      <section id="kuis">
        <h2>Uji Pemahamanmu!</h2>

        <p>
          Jawablah pertanyaan berikut untuk menguji pemahamanmu tentang
          bilangan ganjil dan genap.
        </p>

        <div className="soal-kuis">
          {selesai ? (
            <>
              <p className="label-kuis">KUIS SELESAI</p>
              <h3>Hasil Kuis Kamu</h3>

              <h2 id="skor">Skor: {nilai} / 100</h2>

              <p>
                Kamu menjawab benar sebanyak {nilai / 10} dari 10 soal.
              </p>

              <div style={{ textAlign: 'left', marginTop: '25px' }}>
                <h3>Pembahasan Jawaban</h3>

                {riwayatJawaban.map((item, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <strong>
                      {index + 1}. {item.pertanyaan}
                    </strong>

                    <p>Jawaban kamu: {item.pilihan}</p>
                    <p>Jawaban benar: {item.jawaban}</p>

                    <p style={{ color: item.benar ? 'green' : 'red' }}>
                      {item.benar ? 'Benar!' : 'Belum tepat.'}
                    </p>

                    <p>{item.pembahasan}</p>
                  </div>
                ))}
              </div>

              <button onClick={ulangiKuis}>Ulangi Kuis</button>
            </>
          ) : (
            <>
              <p className="label-kuis">
                PERTANYAAN {nomorSoal + 1} DARI {daftarSoal.length}
              </p>

              <h3>{soal.pertanyaan}</h3>

              <div className="pilihan-jawaban">
                {soal.pilihan.map((pilihan) => (
                  <button
                    key={pilihan}
                    onClick={() => jawabKuis(pilihan)}
                    disabled={sudahMenjawab}
                    style={{
                      backgroundColor: sudahMenjawab
                        ? pilihan === soal.jawaban
                          ? 'green'
                          : pilihan === jawabanDipilih
                            ? 'red'
                            : '#7054d8'
                        : '#7054d8'
                    }}
                  >
                    {pilihan}
                  </button>
                ))}
              </div>

              {sudahMenjawab && (
                <>
                  <p id="feedback" aria-live="polite">
                    {jawabanDipilih === soal.jawaban
                      ? 'Benar! Jawaban kamu tepat.'
                      : 'Jawaban belum tepat. Perhatikan pembahasannya.'}
                  </p>

                  <p>{soal.pembahasan}</p>

                  <button onClick={soalBerikutnya}>
                    {nomorSoal === daftarSoal.length - 1
                      ? 'Lihat Hasil'
                      : 'Soal Berikutnya'}
                  </button>
                </>
              )}

              <p id="skor">Skor sementara: {nilai}</p>
            </>
          )}
        </div>
      </section>

      <section id="tentang" className="tentang">
        <h2>Tentang Aplikasi</h2>

        <p>
          GanjilGenap merupakan media pembelajaran matematika yang dirancang
          untuk membantu siswa memahami bilangan ganjil dan genap dengan
          cara yang mudah dan menyenangkan.
        </p>

        <div className="info-aplikasi">
          <p><strong>Nama Aplikasi:</strong> GanjilGenap</p>
          <p><strong>Mata Pelajaran:</strong> Matematika</p>
          <p><strong>Materi:</strong> Bilangan Ganjil dan Genap</p>
          <p><strong>Pembuat:</strong> Mafatihun Nabila</p>
        </div>
      </section>

      <footer>
        <h3>GanjilGenap</h3>
        <p>Belajar Matematika Jadi Menyenangkan</p>
        <p>© 2026 GanjilGenap - Belajar Matematika</p>
      </footer>
    </>
  )
}

export default App
