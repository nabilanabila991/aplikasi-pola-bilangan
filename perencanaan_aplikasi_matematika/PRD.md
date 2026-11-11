# PRD — Aplikasi Pembelajaran Bilangan Ganjil dan Genap

## 1. Ringkasan produk
Aplikasi ini merupakan media pembelajaran matematika berbasis web responsif yang dapat digunakan melalui smartphone dan browser desktop. Versi awal berfokus pada materi bilangan ganjil dan genap untuk membantu siswa memahami konsep, menerapkan konsep pada berbagai bentuk soal, dan mengembangkan proses literasi matematika.

Nama produk sementara: **GanjilGenap**  
Platform: Web responsif, dengan pendekatan Progressive Web App (PWA) sebagai opsi implementasi.  
Bahasa: Indonesia.  
Pengguna utama: siswa yang sedang mempelajari atau mengulang materi bilangan ganjil dan genap.

## 2. Latar belakang dan dasar kebutuhan
Berdasarkan wawancara terhadap satu siswa (informan S01):
- Informan sudah mengenal contoh bilangan ganjil dan genap serta mengidentifikasinya melalui angka terakhir.
- Bilangan besar dan jumlah soal yang banyak menuntut ketelitian.
- Soal cerita lebih sulit daripada soal klasifikasi langsung karena siswa perlu memahami maksud pertanyaan.
- Penjelasan panjang, kata-kata sulit, dan penyampaian terlalu cepat dapat membuat siswa bingung.
- Gambar dan tabel dinilai membantu.
- Tampilan dengan terlalu banyak tulisan dan gambar mengurangi fokus.
- Siswa menyukai contoh sebelum latihan, pembelajaran bertahap, permainan, kuis, dan umpan balik benar/salah.
- Aplikasi diharapkan sederhana, mudah digunakan, dan tidak memiliki terlalu banyak tombol.

Wawancara ini menjadi analisis kebutuhan awal. Karena informan hanya satu orang, kebutuhan perlu divalidasi lagi melalui uji coba dengan beberapa siswa dan guru.

## 3. Masalah yang ingin diselesaikan
1. Siswa dapat mengetahui aturan ganjil-genap, tetapi belum tentu mampu menerapkannya dalam konteks soal cerita.
2. Informasi soal yang panjang dapat menyulitkan siswa menemukan hal yang ditanyakan.
3. Penyajian yang terlalu padat atau cepat dapat menambah beban kognitif yang tidak perlu.
4. Siswa membutuhkan contoh dan bantuan bertahap sebelum mengerjakan soal secara mandiri.
5. Siswa membutuhkan umpan balik yang menjelaskan alasan, bukan hanya tanda benar atau salah.

## 4. Tujuan produk
- Menyediakan materi yang ringkas, jelas, dan bertahap.
- Membantu siswa mengenali bilangan ganjil dan genap.
- Melatih siswa menggunakan konsep dalam soal langsung dan soal cerita.
- Membantu siswa mengidentifikasi informasi penting dan apa yang ditanyakan.
- Memberikan latihan dan umpan balik yang mendukung refleksi.
- Mengurangi hambatan penyajian yang tidak relevan dengan pembelajaran.

## 5. Sasaran pengguna dan kebutuhan
### Pengguna utama: siswa
Membutuhkan:
- Penjelasan sederhana dan dapat diulang.
- Contoh visual melalui gambar atau tabel.
- Latihan dari mudah ke lebih kompleks.
- Petunjuk ketika mengalami kesulitan.
- Umpan balik langsung dan mudah dipahami.
- Antarmuka yang nyaman di smartphone.

### Pengguna pendukung: guru/peneliti
Membutuhkan:
- Materi dan soal yang dapat ditinjau.
- Hasil latihan sederhana untuk melihat bagian yang perlu dipelajari kembali.
- Struktur konten yang mudah diperbarui.

## 6. Tujuan pembelajaran
Setelah menggunakan modul, siswa diharapkan mampu:
1. Menjelaskan pengertian bilangan ganjil dan genap dengan bahasa sendiri.
2. Mengelompokkan bilangan ganjil dan genap berdasarkan digit satuan.
3. Menjelaskan alasan suatu bilangan termasuk ganjil atau genap.
4. Menyelesaikan soal klasifikasi dengan tingkat kesulitan bertahap.
5. Mengidentifikasi informasi yang diketahui dan yang ditanyakan pada soal cerita sederhana.
6. Memilih strategi penyelesaian yang sesuai dan menafsirkan jawaban dalam konteks soal.

Catatan: tujuan nomor 5–6 merupakan sasaran pengembangan literasi matematika yang perlu disesuaikan dengan capaian pembelajaran dan tingkat kelas sasaran.

## 7. Ruang lingkup produk
### MVP — wajib ada
| Modul | Isi |
|---|---|
| Beranda | Judul aplikasi, pengantar singkat, tombol mulai belajar |
| Petunjuk | Cara menggunakan aplikasi secara singkat |
| Materi | Konsep ganjil-genap, aturan digit satuan, contoh |
| Contoh terbimbing | Soal contoh dan pembahasan langkah demi langkah |
| Latihan dasar | Memilih atau mengelompokkan bilangan |
| Latihan penerapan | Bilangan lebih besar dan variasi soal |
| Soal cerita | Memahami konteks, informasi diketahui, pertanyaan, strategi, jawaban |
| Kuis | Kumpulan soal singkat dengan umpan balik |
| Hasil belajar | Skor atau ringkasan latihan yang sederhana |

### Di luar MVP
- Login dan profil siswa.
- Akun guru dan dashboard kelas.
- Papan peringkat.
- Fitur sosial/chat.
- Analitik tingkat lanjut.
- Modul materi matematika lain.
- Sinkronisasi lintas perangkat.

## 8. Kebutuhan fungsional
- FR-01: Pengguna dapat membuka beranda dan memulai pembelajaran.
- FR-02: Pengguna dapat berpindah antarbagian melalui navigasi yang jelas.
- FR-03: Pengguna dapat membaca materi dalam bagian pendek.
- FR-04: Pengguna dapat melihat tabel atau visual contoh bilangan.
- FR-05: Pengguna dapat membuka contoh soal beserta pembahasan.
- FR-06: Pengguna dapat menjawab latihan pilihan atau klasifikasi.
- FR-07: Sistem memeriksa jawaban dan menampilkan umpan balik.
- FR-08: Jika jawaban salah, sistem memberi petunjuk yang relevan dan kesempatan mencoba kembali.
- FR-09: Pengguna dapat mengerjakan soal cerita dengan panduan memahami informasi.
- FR-10: Pengguna dapat mengerjakan kuis dan melihat ringkasan hasil.
- FR-11: Pengguna dapat mengulang materi atau latihan.
- FR-12: Aplikasi menyesuaikan tata letak dengan ukuran layar.

## 9. Kebutuhan nonfungsional
- NFR-01 Responsif pada smartphone, tablet, dan desktop.
- NFR-02 Antarmuka konsisten, sederhana, dan mudah dipelajari.
- NFR-03 Teks mudah dibaca dan kontras memadai.
- NFR-04 Tombol memiliki label jelas dan area sentuh memadai.
- NFR-05 Konten inti dapat dimuat dengan cepat pada koneksi standar.
- NFR-06 Tidak meminta data pribadi yang tidak diperlukan.
- NFR-07 Fungsi utama tetap dapat digunakan tanpa membuat akun.
- NFR-08 Kesalahan input atau kondisi kosong ditangani dengan pesan yang jelas.

## 10. Alur pembelajaran yang disarankan
1. Beranda → Mulai belajar.
2. Pengantar singkat → cek pengetahuan awal.
3. Materi konsep → contoh visual.
4. Contoh terbimbing → siswa melihat cara berpikir.
5. Latihan dasar → umpan balik.
6. Latihan penerapan → tingkat kesulitan meningkat.
7. Soal cerita → identifikasi informasi, pertanyaan, strategi, dan jawaban.
8. Kuis → ringkasan hasil dan rekomendasi bagian untuk diulang.

Siswa sebaiknya dapat mengulang materi dan tidak dipaksa berpindah ke tahap berikutnya hanya karena waktu.

## 11. Strategi mengelola Cognitive Load
### Intrinsic Load
- Susun konten dari konsep dasar ke penerapan.
- Pecah soal cerita menjadi langkah-langkah kecil.
- Pastikan prasyarat pengenalan angka tersedia sebagai pengingat singkat.
- Tambahkan variasi secara bertahap, bukan sekaligus.

### Extraneous Load
- Hindari paragraf panjang.
- Gunakan satu instruksi utama per layar.
- Hindari tombol yang tidak diperlukan.
- Gunakan gambar/tabel yang langsung berkaitan dengan konsep.
- Hindari animasi, suara, dan dekorasi yang tidak membantu.
- Berikan kontrol untuk mengulang atau melanjutkan.

### Germane Load
- Tampilkan contoh yang dikerjakan.
- Minta siswa menjelaskan alasan memilih jawaban.
- Berikan petunjuk yang membantu siswa menemukan strategi.
- Sertakan refleksi singkat setelah soal cerita.
- Beri kesempatan memeriksa kembali jawaban.

## 12. Pendekatan literasi matematika
Soal cerita tidak hanya meminta siswa memilih ganjil atau genap. Desain soal perlu memberi kesempatan kepada siswa untuk:
1. **Merumuskan**: memahami situasi, menentukan informasi penting, dan mengenali pertanyaan.
2. **Menerapkan**: memilih aturan atau strategi ganjil-genap untuk menyelesaikan masalah.
3. **Menafsirkan**: menjelaskan arti hasil sesuai konteks cerita dan memeriksa kewajarannya.

Contoh kerangka soal: cerita singkat tentang sejumlah benda yang dibagikan berpasangan; siswa mengidentifikasi jumlah benda, menentukan apakah jumlahnya dapat dipasangkan tanpa sisa, lalu menjelaskan makna jawabannya. Konten soal harus ditinjau guru sebelum digunakan.

## 13. Indikator keberhasilan awal
Indikator teknis:
- Semua fitur MVP dapat digunakan tanpa error kritis.
- Tampilan dan navigasi berfungsi pada smartphone dan desktop.
- Seluruh kunci jawaban dan umpan balik telah diperiksa.

Indikator uji coba pembelajaran:
- Siswa dapat menyelesaikan alur belajar tanpa banyak bantuan teknis.
- Siswa dapat menjelaskan alasan pengelompokan bilangan.
- Siswa dapat menemukan informasi penting dalam soal cerita.
- Siswa menunjukkan peningkatan pada tugas literasi matematika yang diberikan sebelum dan sesudah pembelajaran.

Peningkatan kemampuan tidak boleh disimpulkan hanya dari skor kuis dalam aplikasi. Gunakan instrumen penilaian yang sesuai, rubrik, dan prosedur uji coba yang jelas.

## 14. Asumsi dan hal yang perlu dikonfirmasi
- Jenjang/kelas sasaran akhir belum ditetapkan secara eksplisit. Wawancara dilakukan dengan siswa kelas 7A, tetapi penetapan target pengguna perlu dikonfirmasi.
- Cakupan materi MVP adalah bilangan ganjil dan genap.
- Aplikasi tidak memerlukan login pada versi awal.
- Penyimpanan hasil belajar dapat dilakukan secara lokal pada perangkat.
- Teknologi implementasi belum diputuskan; pilih teknologi web yang mendukung responsivitas dan pemeliharaan mudah.
- Perlu validasi materi, bahasa, dan soal oleh dosen/guru matematika sebelum uji coba.

## 15. Risiko dan mitigasi
| Risiko | Mitigasi |
|---|---|
| Soal cerita terlalu panjang | Tulis konteks ringkas dan pecah pertanyaan menjadi langkah |
| Tampilan terlalu ramai | Batasi elemen per layar dan lakukan uji keterbacaan |
| Siswa menebak jawaban | Minta alasan atau langkah berpikir pada beberapa soal |
| Umpan balik hanya memberi skor | Sertakan penjelasan singkat dan petunjuk |
| Materi tidak sesuai jenjang | Validasi dengan guru/dosen dan kurikulum sasaran |
| Hasil uji coba dianggap mewakili semua siswa | Jelaskan jumlah dan karakteristik peserta uji coba |

## 16. Pertanyaan terbuka sebelum implementasi
1. Apakah target utama tetap siswa kelas VII SMP?
2. Apakah aplikasi harus dapat digunakan offline?
3. Apakah hasil belajar cukup tersimpan di perangkat atau perlu dashboard guru?
4. Apakah penelitian akan mengukur literasi matematika dengan pretest dan posttest?
5. Apakah ada ketentuan teknologi dari kampus atau dosen pembimbing?
