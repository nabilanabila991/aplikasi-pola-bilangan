// FITUR LATIHAN
function periksaAngka() {
    const input = document.getElementById("angka");
    const hasil = document.getElementById("hasil");

    if (input.value.trim() === "") {
        hasil.textContent = "Silakan masukkan bilangan terlebih dahulu!";
        hasil.style.color = "red";
        return;
    }

    const angka = Number(input.value);

    if (!Number.isSafeInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid!";
        hasil.style.color = "red";
        return;
    }

    if (angka % 2 === 0) {
        hasil.textContent = angka + " adalah bilangan GENAP. Hebat!";
    } else {
        hasil.textContent = angka + " adalah bilangan GANJIL. Hebat!";
    }

    hasil.style.color = "green";
}

// DATA KUIS: 10 SOAL
const daftarSoal = [
    {
        pertanyaan: "Angka 7 termasuk bilangan apa?",
        jawaban: "Ganjil"
    },
    {
        pertanyaan: "Angka 12 termasuk bilangan apa?",
        jawaban: "Genap"
    },
    {
        pertanyaan: "Angka 15 termasuk bilangan apa?",
        jawaban: "Ganjil"
    },
    {
        pertanyaan: "Angka 20 termasuk bilangan apa?",
        jawaban: "Genap"
    },
    {
        pertanyaan: "Angka 23 termasuk bilangan apa?",
        jawaban: "Ganjil"
    },
    {
        pertanyaan: "Angka 36 termasuk bilangan apa?",
        jawaban: "Genap"
    },
    {
        pertanyaan: "Angka 51 termasuk bilangan apa?",
        jawaban: "Ganjil"
    },
    {
        pertanyaan: "Angka 100 termasuk bilangan apa?",
        jawaban: "Genap"
    },
    {
        pertanyaan: "Hasil dari 8 + 5 adalah 13. Termasuk bilangan apa?",
        jawaban: "Ganjil"
    },
    {
        pertanyaan: "Hasil dari 6 × 4 adalah 24. Termasuk bilangan apa?",
        jawaban: "Genap"
    }
];

let nomorSoal = 0;
let nilai = 0;
let sudahMenjawab = false;

// MENAMPILKAN SOAL
function tampilkanSoal() {
    document.getElementById("pertanyaan").textContent =
        daftarSoal[nomorSoal].pertanyaan;

    document.getElementById("nomor-soal").textContent =
        "Soal " + (nomorSoal + 1) + " dari " + daftarSoal.length;

    document.getElementById("feedback").textContent = "";
    document.getElementById("skor").textContent = "";

    document.getElementById("lanjut").style.display = "none";
    document.getElementById("ulangi").style.display = "none";

    document.querySelector(".pilihan-jawaban").style.display = "flex";

    sudahMenjawab = false;
}

// MEMERIKSA JAWABAN
function jawabKuis(pilihan) {
    if (sudahMenjawab) return;

    sudahMenjawab = true;

    const jawabanBenar = daftarSoal[nomorSoal].jawaban;
    const feedback = document.getElementById("feedback");

    if (pilihan === jawabanBenar) {
        nilai += 10;
        feedback.textContent = "Benar! Jawaban kamu tepat.";
        feedback.style.color = "green";
    } else {
        feedback.textContent =
            "Belum tepat. Jawaban yang benar adalah " + jawabanBenar + ".";
        feedback.style.color = "red";
    }

    document.getElementById("skor").textContent =
        "Nilai sementara: " + nilai;

    document.getElementById("lanjut").style.display = "inline-block";

    if (nomorSoal === daftarSoal.length - 1) {
        document.getElementById("lanjut").textContent = "Lihat Hasil";
    } else {
        document.getElementById("lanjut").textContent = "Soal Berikutnya";
    }
}

// BERPINDAH KE SOAL BERIKUTNYA
function soalBerikutnya() {
    if (nomorSoal < daftarSoal.length - 1) {
        nomorSoal++;
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

// MENAMPILKAN HASIL AKHIR
function tampilkanHasil() {
    document.getElementById("pertanyaan").textContent = "Kuis Selesai!";

    document.getElementById("feedback").textContent =
        "Selamat! Kamu sudah menyelesaikan semua soal.";

    document.getElementById("feedback").style.color = "green";

    document.getElementById("skor").textContent =
        "Nilai akhir kamu: " + nilai;

    document.getElementById("nomor-soal").textContent =
        daftarSoal.length + " soal telah dikerjakan";

    document.getElementById("lanjut").style.display = "none";
    document.querySelector(".pilihan-jawaban").style.display = "none";
    document.getElementById("ulangi").style.display = "inline-block";
}

// MENGULANGI KUIS
function ulangiKuis() {
    nomorSoal = 0;
    nilai = 0;
    sudahMenjawab = false;

    tampilkanSoal();
}

// MENJALANKAN KUIS SAAT HALAMAN DIBUKA
tampilkanSoal();