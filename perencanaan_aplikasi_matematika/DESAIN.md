# DESAIN — UI/UX Aplikasi Pembelajaran Bilangan Ganjil dan Genap

## 1. Arah desain
Desain mengutamakan kesederhanaan, keterbacaan, dan fokus belajar. Antarmuka dibuat mobile-first dan responsif agar nyaman digunakan melalui smartphone maupun browser desktop.

Prinsip utama:
- Satu fokus pembelajaran dalam satu layar.
- Informasi disajikan sedikit demi sedikit.
- Visual digunakan untuk menjelaskan konsep, bukan sekadar hiasan.
- Siswa dapat mengontrol tempo belajar.
- Navigasi dan tombol menggunakan istilah yang mudah dipahami.

## 2. Identitas visual
Nama sementara: GanjilGenap.

Arah visual:
- Ramah untuk siswa SMP, sederhana, cerah secukupnya, dan tidak kekanak-kanakan.
- Gunakan latar netral terang agar teks mudah dibaca.
- Gunakan satu warna utama untuk navigasi/aksi dan satu warna aksen untuk penekanan.
- Gunakan warna status benar dan salah dengan label teks atau ikon, bukan warna saja.
- Hindari terlalu banyak warna dalam satu layar.

Palet awal (dapat disesuaikan saat prototipe):
- Biru utama: `#2563EB`
- Biru sangat muda: `#EFF6FF`
- Latar: `#F8FAFC`
- Teks utama: `#1E293B`
- Teks sekunder: `#64748B`
- Benar: `#15803D`
- Salah/perlu diperbaiki: `#B91C1C`
- Garis/border: `#E2E8F0`

Tipografi:
- Gunakan font sans-serif yang mudah dibaca.
- Ukuran isi disarankan minimal 16 px pada smartphone.
- Judul halaman sekitar 24–28 px pada smartphone.
- Gunakan panjang baris yang nyaman dan jarak antarbaris memadai.
- Hindari paragraf panjang; gunakan poin atau kartu informasi singkat.

## 3. Struktur navigasi
Navigasi utama:
- Beranda
- Belajar
- Latihan
- Kuis
- Progres

Pada layar smartphone, gunakan navigasi bawah atau menu sederhana dengan label teks. Jangan menampilkan terlalu banyak pilihan sekaligus. Pada desktop, navigasi dapat ditampilkan di bagian atas atau sisi kiri.

## 4. Peta halaman
```text
Beranda
 ├── Petunjuk penggunaan
 ├── Mulai belajar
 │    ├── Cek pengetahuan awal (opsional)
 │    ├── Materi konsep
 │    ├── Contoh visual
 │    └── Contoh terbimbing
 ├── Latihan
 │    ├── Level 1: Kenali bilangan
 │    ├── Level 2: Terapkan aturan
 │    └── Level 3: Soal cerita
 ├── Kuis
 │    └── Hasil kuis dan pembahasan
 └── Progres
      └── Ringkasan latihan dan bagian yang dapat diulang
```

## 5. Rancangan layar

### 5.1 Beranda
Tujuan: memberi orientasi dan satu tindakan utama.
Elemen:
- Nama/logo aplikasi.
- Sapaan singkat: “Ayo belajar bilangan ganjil dan genap.”
- Deskripsi satu kalimat.
- Tombol utama “Mulai Belajar”.
- Tautan sekunder “Lihat Petunjuk”.
Hindari menampilkan statistik, banyak kartu, atau animasi dekoratif di beranda.

### 5.2 Materi konsep
Tujuan: menjelaskan konsep dengan singkat.
Konten:
- Definisi sederhana bilangan genap dan ganjil.
- Aturan digit satuan:
  - Genap: 0, 2, 4, 6, 8.
  - Ganjil: 1, 3, 5, 7, 9.
- Satu tabel atau visual pengelompokan contoh.
- Tombol “Lihat Contoh” dan “Coba Latihan”.
Sediakan kontrol “Kembali” dan “Lanjut”; siswa dapat mengulang bagian.

### 5.3 Contoh terbimbing
Tujuan: memperlihatkan proses berpikir.
Format:
1. Tampilkan satu soal.
2. Tanyakan apa yang perlu diperhatikan.
3. Tampilkan petunjuk digit satuan.
4. Tampilkan jawaban.
5. Berikan alasan satu atau dua kalimat.
Jangan langsung menampilkan banyak contoh dalam satu layar.

### 5.4 Latihan dasar
Tujuan: melatih klasifikasi.
Format:
- Satu soal per tampilan.
- Pilihan jawaban jelas, misalnya “Ganjil” dan “Genap”.
- Tombol “Periksa Jawaban”.
- Setelah diperiksa, tampilkan status dan penjelasan singkat.
- Jika salah, berikan petunjuk dan opsi “Coba Lagi”.
- Tampilkan progres sederhana, misalnya “Soal 2 dari 5”.

### 5.5 Latihan penerapan
Tujuan: meningkatkan ketelitian dan transfer konsep.
Format:
- Variasi bilangan, termasuk bilangan yang lebih besar.
- Tetap satu fokus per soal.
- Minta siswa memperhatikan digit satuan dan memilih alasan pada beberapa soal.
- Tingkat kesulitan naik secara bertahap.

### 5.6 Soal cerita
Tujuan: melatih literasi matematika.
Gunakan panel bertahap:
1. **Baca situasi** — tampilkan cerita singkat dengan kalimat sederhana.
2. **Informasi penting** — siswa memilih atau menandai data yang relevan.
3. **Apa yang ditanyakan?** — siswa mengidentifikasi pertanyaan.
4. **Pilih strategi** — siswa memilih cara menggunakan konsep ganjil-genap.
5. **Tentukan jawaban** — siswa memasukkan atau memilih hasil.
6. **Tafsirkan** — siswa memilih/menulis arti jawaban sesuai cerita.

Jangan memecah teks menjadi terlalu banyak layar jika justru membuat siswa kehilangan konteks. Gunakan satu panel dengan langkah yang jelas atau tampilan bertahap yang dapat dikontrol.

### 5.7 Kuis
Tujuan: mengukur pemahaman setelah belajar.
- Berisi campuran soal klasifikasi dan soal cerita.
- Tampilkan satu soal pada satu waktu.
- Berikan umpan balik setelah jawaban dikirim atau setelah kuis selesai, sesuai tujuan penilaian.
- Tampilkan skor dan pembahasan.
- Berikan tombol “Ulangi Materi” dan “Coba Lagi”.

### 5.8 Progres
Tujuan: memberi gambaran perkembangan tanpa tekanan.
Tampilkan:
- Materi yang sudah dibuka/diselesaikan.
- Jumlah latihan yang telah dikerjakan.
- Ringkasan jawaban benar dan bagian yang perlu diulang.
Hindari peringkat publik, perbandingan antarsiswa, atau pesan yang mempermalukan.

## 6. Komponen antarmuka
- `AppHeader`: identitas aplikasi dan navigasi.
- `PageContainer`: lebar konten dan jarak konsisten.
- `LearningCard`: wadah materi singkat.
- `NumberTable`: tabel contoh bilangan.
- `StepIndicator`: penanda tahap belajar.
- `QuestionCard`: area soal.
- `AnswerOption`: pilihan jawaban dengan status fokus/terpilih.
- `FeedbackPanel`: penjelasan benar/salah dan petunjuk.
- `ProgressIndicator`: progres latihan.
- `PrimaryButton` dan `SecondaryButton`: tombol aksi yang konsisten.

## 7. Interaksi dan umpan balik
Contoh umpan balik:
- Jawaban benar: “Benar. Angka satuannya 8, jadi bilangan ini termasuk genap.”
- Jawaban salah: “Belum tepat. Coba perhatikan angka satuannya terlebih dahulu.”
- Setelah percobaan kedua: tampilkan penjelasan singkat dan ajak siswa mencoba soal berikutnya.

Umpan balik harus:
- Menjelaskan alasan.
- Tidak menyalahkan atau mempermalukan siswa.
- Menggunakan bahasa sederhana.
- Memberi langkah berikutnya yang jelas.

## 8. Responsivitas
### Smartphone
- Satu kolom.
- Tombol lebar dan mudah disentuh.
- Navigasi ringkas.
- Teks tidak terlalu kecil.
- Hindari tabel yang memerlukan scroll horizontal; ubah menjadi kartu bila perlu.

### Tablet
- Konten tetap fokus di tengah.
- Gunakan ruang tambahan tanpa menambah elemen yang tidak perlu.

### Desktop
- Batasi lebar area baca agar teks tidak terlalu melebar.
- Materi dan panel bantuan dapat diletakkan berdampingan jika tetap jelas.
- Pertahankan urutan dan istilah yang sama dengan versi smartphone.

## 9. Aksesibilitas dan kenyamanan
- Pastikan kontras teks dan latar memadai.
- Semua tombol memiliki nama yang jelas.
- Status benar/salah memiliki teks atau ikon, bukan warna saja.
- Gunakan heading berurutan.
- Sediakan fokus keyboard yang terlihat.
- Jangan menggunakan animasi berkedip atau gerakan cepat.
- Hindari suara otomatis.
- Beri jeda dan kendali kepada siswa untuk melanjutkan.

## 10. Prinsip desain berdasarkan Cognitive Load
| Jenis beban | Potensi masalah dari wawancara | Keputusan desain |
|---|---|---|
| Intrinsic | Angka besar, banyak soal, soal cerita, prasyarat angka | Urutan bertingkat, satu soal per tampilan, pengingat prasyarat, langkah soal cerita |
| Extraneous | Teks panjang, kata sulit, tempo cepat, terlalu banyak elemen | Bahasa sederhana, teks ringkas, visual relevan, navigasi konsisten, kontrol tempo |
| Germane | Membutuhkan contoh, gambar/tabel, kuis, pemeriksaan | Contoh terbimbing, latihan aktif, alasan jawaban, umpan balik, refleksi |

## 11. Wireframe tekstual
### Beranda (smartphone)
```text
┌──────────────────────────┐
│ GanjilGenap              │
│                          │
│ Ayo belajar              │
│ bilangan ganjil          │
│ dan genap!               │
│                          │
│ Belajar dengan contoh,   │
│ latihan, dan kuis.       │
│                          │
│ [     Mulai Belajar    ] │
│                          │
│       Lihat Petunjuk     │
│                          │
│ Beranda  Belajar  Kuis   │
└──────────────────────────┘
```

### Latihan (smartphone)
```text
┌──────────────────────────┐
│ Latihan Dasar            │
│ Soal 2 dari 5            │
│ ━━━━━━━━━                │
│                          │
│ Bilangan 124 termasuk    │
│ bilangan apa?            │
│                          │
│ [       Ganjil         ] │
│ [       Genap          ] │
│                          │
│ [   Periksa Jawaban   ]  │
│                          │
│ Petunjuk                 │
│ Perhatikan angka satuan.│
└──────────────────────────┘
```

### Soal cerita (smartphone)
```text
┌──────────────────────────┐
│ Tantangan Cerita         │
│ Langkah 1 dari 4         │
│                          │
│ [Cerita singkat]         │
│                          │
│ Informasi apa yang       │
│ diketahui?               │
│                          │
│ [Pilihan informasi]      │
│                          │
│ [       Lanjut         ] │
└──────────────────────────┘
```

## 12. Catatan sebelum desain final
- Wireframe di atas merupakan rancangan awal, bukan hasil uji pengguna.
- Uji prototipe dengan siswa untuk mengetahui apakah istilah, ukuran tombol, urutan langkah, dan jumlah informasi sudah sesuai.
- Validasi semua ilustrasi, contoh, dan soal dengan guru/dosen matematika.
