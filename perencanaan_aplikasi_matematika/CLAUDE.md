# CLAUDE.md
# Pedoman Pengembangan Aplikasi Pembelajaran Matematika

## 1. Peran dan tujuan
Anda bertindak sebagai AI coding assistant yang membantu mengembangkan aplikasi pembelajaran matematika berbasis web responsif untuk smartphone, tablet, dan browser desktop.

Aplikasi tahap pertama berfokus pada materi **Bilangan Ganjil dan Genap**. Tujuan pembelajaran bukan hanya agar siswa dapat mengklasifikasikan bilangan, tetapi juga agar siswa mampu memahami konteks soal, memilih informasi yang relevan, menentukan strategi, dan menjelaskan atau menafsirkan jawaban.

Pengembangan harus mengacu pada:
- `PRD.md` untuk kebutuhan produk dan ruang lingkup.
- `DESAIN.md` untuk tampilan, pengalaman pengguna, dan alur.
- `ROADMAP.md` untuk urutan pengerjaan.

Jika instruksi kode bertentangan dengan dokumen perencanaan, utamakan kebutuhan pembelajaran dan keselamatan pengguna. Ajukan klarifikasi jika perubahan akan mengubah ruang lingkup utama.

## 2. Dasar analisis kebutuhan
Dokumen kebutuhan berasal dari wawancara seorang siswa (kode informan S01). Temuan yang perlu diperhatikan:
- Siswa telah mengenal contoh bilangan ganjil dan genap serta menggunakan digit terakhir untuk membedakannya.
- Siswa kadang kurang teliti ketika bilangan besar atau jumlah soal banyak.
- Siswa dapat mengalami kesulitan memahami soal berbentuk cerita, terutama jika teksnya panjang.
- Penjelasan panjang, istilah sulit, dan tempo penyampaian terlalu cepat dapat menghambat pemahaman.
- Gambar dan tabel membantu siswa melihat contoh dengan lebih jelas.
- Terlalu banyak tulisan, gambar, atau tombol dapat mengganggu fokus.
- Siswa menyukai contoh terlebih dahulu, penjelasan bertahap, permainan, kuis, dan umpan balik benar/salah.
- Siswa menginginkan aplikasi sederhana dan mudah digunakan.

Catatan metodologis: temuan tersebut berasal dari satu informan dan menjadi masukan desain awal, bukan bukti bahwa seluruh siswa memiliki kebutuhan yang sama. Jangan menulis klaim efektivitas atau keberhasilan penelitian sebelum dilakukan pengujian.

## 3. Prinsip pengembangan
1. **Mobile-first**: rancang untuk layar smartphone terlebih dahulu, lalu adaptasikan ke tablet dan desktop.
2. **Sederhana dan fokus**: satu tujuan utama pada setiap layar; hindari elemen dekoratif yang tidak mendukung belajar.
3. **Bertahap**: mulai dari konsep dan contoh, lanjut ke latihan dasar, latihan penerapan, kemudian soal cerita.
4. **Bahasa mudah**: gunakan kalimat pendek, instruksi langsung, dan istilah yang dijelaskan.
5. **Umpan balik mendidik**: jangan hanya menampilkan benar/salah; berikan alasan singkat dan petunjuk perbaikan.
6. **Kontrol siswa**: siswa dapat mengulang penjelasan, melihat contoh, dan melanjutkan ketika siap.
7. **Aksesibel**: teks terbaca, kontras cukup, tombol mudah disentuh, dan informasi tidak dibedakan melalui warna saja.
8. **Privasi**: jangan mengumpulkan nama lengkap, alamat, lokasi, atau data pribadi yang tidak diperlukan.

## 4. Ruang lingkup MVP
Fitur minimum:
- Beranda dan petunjuk penggunaan.
- Materi ringkas tentang bilangan ganjil dan genap.
- Visualisasi/tabel contoh bilangan.
- Contoh soal dengan pembahasan langkah demi langkah.
- Latihan bertingkat: dasar, penerapan, dan soal cerita.
- Kuis singkat.
- Umpan balik jawaban disertai penjelasan atau petunjuk.
- Ringkasan hasil belajar sederhana pada perangkat pengguna.

Tidak termasuk MVP kecuali diminta:
- Akun dan autentikasi siswa.
- Papan peringkat publik.
- Chat atau forum.
- Pembayaran, iklan, dan pelacakan perilaku.
- Dashboard guru yang kompleks.
- Materi matematika di luar bilangan ganjil dan genap.

## 5. Aturan implementasi
- Gunakan komponen yang dapat digunakan ulang.
- Pisahkan data soal dari komponen tampilan agar soal mudah diperbarui.
- Gunakan nama variabel, fungsi, dan komponen yang jelas.
- Tangani kondisi jawaban kosong dan input tidak valid.
- Jangan mengandalkan warna sebagai satu-satunya penanda jawaban.
- Pastikan navigasi dapat digunakan dengan keyboard dan sentuhan.
- Simpan progres secara lokal hanya jika diperlukan; jelaskan bahwa data tersimpan pada perangkat/browser yang digunakan.
- Jangan mengirim data siswa ke server tanpa kebutuhan dan persetujuan yang jelas.
- Hindari animasi otomatis yang mengganggu. Animasi harus singkat, dapat dihentikan, dan mendukung pemahaman.
- Jangan menampilkan terlalu banyak soal atau informasi sekaligus.

## 6. Prinsip pedagogis dan Cognitive Load
Gunakan tiga kategori berikut sebagai panduan desain:
- **Intrinsic load**: materi dan tingkat kesulitan. Kelola dengan prasyarat singkat, urutan soal dari mudah ke lebih kompleks, serta pemecahan soal cerita menjadi bagian kecil.
- **Extraneous load**: beban yang timbul dari penyajian. Kurangi dengan teks ringkas, tata letak konsisten, tombol yang jelas, visual relevan, dan menghindari dekorasi berlebihan.
- **Germane load**: usaha mental untuk membangun pemahaman. Dukung dengan contoh yang dikerjakan, latihan aktif, penjelasan alasan, pemeriksaan jawaban, dan kesempatan menjelaskan strategi.

Jangan menyamakan jumlah animasi atau banyaknya gambar dengan pembelajaran yang lebih baik. Setiap elemen visual harus memiliki fungsi.

## 7. Kualitas dan pengujian
Sebelum menyatakan fitur selesai:
- Uji tampilan pada lebar smartphone dan desktop.
- Uji seluruh tombol, navigasi, jawaban benar, jawaban salah, dan percobaan ulang.
- Pastikan umpan balik sesuai dengan kunci jawaban.
- Periksa ejaan, kejelasan instruksi, dan konsistensi istilah.
- Pastikan tidak ada halaman kosong atau tautan rusak.
- Uji aksesibilitas dasar: kontras, label tombol, fokus keyboard, dan ukuran area sentuh.
- Pastikan aplikasi tetap dapat digunakan ketika ukuran layar berubah.

## 8. Cara bekerja
1. Baca dokumen perencanaan sebelum membuat atau mengubah fitur.
2. Kerjakan satu bagian kecil pada satu waktu.
3. Jelaskan file yang dibuat atau diubah.
4. Jangan menambahkan fitur di luar MVP tanpa alasan dan persetujuan.
5. Jika informasi belum tersedia, tuliskan asumsi secara eksplisit; jangan mengarang hasil wawancara.
6. Setelah implementasi, berikan cara menjalankan dan cara menguji fitur tersebut.

## 9. Kriteria selesai
MVP dapat dianggap siap untuk uji coba awal apabila seluruh fitur MVP berjalan, tampilan responsif, soal dan umpan balik tervalidasi, serta tidak ada masalah navigasi yang menghambat siswa. Kesiapan teknis tidak sama dengan bukti peningkatan literasi matematika; efektivitas pembelajaran harus diuji secara terpisah.
