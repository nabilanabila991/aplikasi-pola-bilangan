
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
        hasil.textContent = angka + " adalah bilangan genap.";
        hasil.style.color = "green";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil.";
        hasil.style.color = "green";
    }
}

// DAFTAR SOAL KUIS
const daftarSoal = [
    {
        pertanyaan: "Hasil dari 125 + 237 termasuk bilangan apa?",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Genap",
        pembahasan: "125 + 237 = 362. Karena 362 habis dibagi 2, maka termasuk bilangan genap."
    },
    {
        pertanyaan: "Hasil dari 15 × 13 termasuk bilangan apa?",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Ganjil",
        pembahasan: "15 × 13 = 195. Karena 195 tidak habis dibagi 2, maka termasuk bilangan ganjil."
    },
    {
        pertanyaan: "Hasil dari 248 − 135 termasuk bilangan apa?",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Ganjil",
        pembahasan: "248 − 135 = 113. Bilangan 113 termasuk bilangan ganjil."
    },
    {
        pertanyaan: "Pola 3, 6, 9, 12, 15, ... Bilangan berikutnya adalah?",
        pilihan: ["17", "18", "19", "20"],
        jawaban: "18",
        pembahasan: "Pola bertambah 3 setiap langkah. Jadi, 15 + 3 = 18."
    },
    {
        pertanyaan: "Hasil dari 24 × 17 termasuk bilangan apa?",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Genap",
        pembahasan: "24 × 17 = 408. Karena 408 habis dibagi 2, maka termasuk bilangan genap."
    },
    {
        pertanyaan: "Jika dua bilangan ganjil dijumlahkan, hasilnya selalu ...",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Genap",
        pembahasan: "Contohnya 5 + 7 = 12. Jumlah dua bilangan ganjil selalu menghasilkan bilangan genap."
    },
    {
        pertanyaan: "Manakah pasangan bilangan yang keduanya ganjil?",
        pilihan: ["12 dan 17", "21 dan 35", "14 dan 19", "20 dan 23"],
        jawaban: "21 dan 35",
        pembahasan: "21 dan 35 sama-sama tidak habis dibagi 2, sehingga keduanya merupakan bilangan ganjil."
    },
    {
        pertanyaan: "Hasil dari 125 × 8 + 17 termasuk bilangan apa?",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Ganjil",
        pembahasan: "125 × 8 + 17 = 1000 + 17 = 1017. Bilangan 1017 termasuk ganjil."
    },
    {
        pertanyaan: "Bilangan yang jika dibagi 2 bersisa 0 termasuk ...",
        pilihan: ["Ganjil", "Genap"],
        jawaban: "Genap",
        pembahasan: "Bilangan genap adalah bilangan yang habis dibagi 2 atau memiliki sisa pembagian 0."
    },
    {
        pertanyaan: "35 permen dibagikan sama banyak kepada 2 orang. Apakah bisa tanpa sisa?",
        pilihan: ["Bisa", "Tidak bisa"],
        jawaban: "Tidak bisa",
        pembahasan: "35 merupakan bilangan ganjil. Jika dibagikan kepada 2 orang, akan tersisa 1 permen."
    }
];

// VARIABEL KUIS
let nomorSoal = 0;
let nilai = 0;
let sudahMenjawab = false;
let riwayatJawaban = [];

// MENAMPILKAN SOAL
function tampilkanSoal() {
    const soal = daftarSoal[nomorSoal];

    document.getElementById("pertanyaan").textContent =
        (nomorSoal + 1) + ". " + soal.pertanyaan;

    document.getElementById("feedback").textContent = "";
    document.getElementById("skor").textContent =
        "Nilai sementara: " + nilai;

    document.getElementById("nomor-soal").textContent =
        "Soal " + (nomorSoal + 1) + " dari " + daftarSoal.length;

    document.getElementById("lanjut").style.display = "none";
    document.getElementById("ulangi").style.display = "none";

    const tempatPilihan = document.querySelector(".pilihan-jawaban");

    tempatPilihan.innerHTML = "";

    soal.pilihan.forEach(function(pilihan) {
        const tombol = document.createElement("button");

        tombol.type = "button";
        tombol.textContent = pilihan;

        tombol.addEventListener("click", function() {
            jawabKuis(pilihan);
        });

        tempatPilihan.appendChild(tombol);
    });

    tempatPilihan.style.display = "flex";
    sudahMenjawab = false;
}

// MEMERIKSA JAWABAN
function jawabKuis(pilihan) {
    if (sudahMenjawab) {
        return;
    }

    sudahMenjawab = true;

    const soal = daftarSoal[nomorSoal];
    const feedback = document.getElementById("feedback");
    const tombol = document.querySelectorAll(".pilihan-jawaban button");

    const benar = pilihan === soal.jawaban;

    if (benar) {
        nilai += 10;
        feedback.textContent = "Benar! Jawaban kamu tepat.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Kurang tepat. Jawaban yang benar adalah " + soal.jawaban + ".";
        feedback.style.color = "red";
    }

    riwayatJawaban.push({
        pertanyaan: soal.pertanyaan,
        jawabanPengguna: pilihan,
        jawabanBenar: soal.jawaban,
        benar: benar,
        pembahasan: soal.pembahasan
    });

    tombol.forEach(function(btn) {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = "0.7";

        if (btn.textContent === soal.jawaban) {
            btn.style.backgroundColor = "#4caf50";
            btn.style.color = "white";
        } else if (btn.textContent === pilihan) {
            btn.style.backgroundColor = "#e74c3c";
            btn.style.color = "white";
        }
    });

    document.getElementById("skor").textContent =
        "Nilai sementara: " + nilai;

    document.getElementById("lanjut").style.display = "inline-block";
}

// PINDAH KE SOAL BERIKUTNYA
function soalBerikutnya() {
    nomorSoal++;

    if (nomorSoal < daftarSoal.length) {
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

    document.getElementById("nomor-soal").textContent =
        daftarSoal.length + " soal telah dikerjakan";

    document.getElementById("skor").textContent =
        "Nilai akhir kamu: " + nilai;

    document.querySelector(".pilihan-jawaban").style.display = "none";
    document.getElementById("lanjut").style.display = "none";
    document.getElementById("ulangi").style.display = "inline-block";

    let pembahasan = document.getElementById("pembahasan-kuis");

    if (!pembahasan) {
        pembahasan = document.createElement("div");
        pembahasan.id = "pembahasan-kuis";
        document.querySelector("#kuis .soal-kuis").appendChild(pembahasan);
    }

    pembahasan.innerHTML = "<h3>Pembahasan Jawaban</h3>";

    riwayatJawaban.forEach(function(item, index) {
        const kartu = document.createElement("div");

        kartu.innerHTML = `
            <h4>Soal ${index + 1}</h4>
            <p>${item.pertanyaan}</p>
            <p>Jawaban kamu: ${item.jawabanPengguna}</p>
            <p>Jawaban benar: ${item.jawabanBenar}</p>
            <p>${item.benar ? "Status: Benar" : "Status: Salah"}</p>
            <p>Pembahasan: ${item.pembahasan}</p>
            <hr>
        `;

        pembahasan.appendChild(kartu);
    });
}

// MENGULANGI KUIS
function ulangiKuis() {
    nomorSoal = 0;
    nilai = 0;
    sudahMenjawab = false;
    riwayatJawaban = [];

    const pembahasan = document.getElementById("pembahasan-kuis");

    if (pembahasan) {
        pembahasan.remove();
    }

    document.querySelector(".pilihan-jawaban").style.display = "flex";

    tampilkanSoal();
}

// MENJALANKAN KUIS SAAT HALAMAN DIBUKA
document.addEventListener("DOMContentLoaded", function() {
    tampilkanSoal();
});
