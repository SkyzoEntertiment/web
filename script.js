const WHATSAPP_OWNER = "6288905714285"; // Ganti dengan nomor WA kamu
const DATA_PEMBAYARAN = {
    dana: {
        judul: "DANA",
        nomor: "0882-7148-4611",
        an: "Suprianto"
    },
    gopay: {
        judul: "GoPay",
        nomor: "0882-7148-4611",
        an: "Varzz Store"
    },
    seabank: {
        judul: "SeaBank",
        nomor: "901490505203",
        an: "Suprianto"
    },
    qris: {
        judul: "QRIS Semua Pembayaran",
        keterangan: "Bisa digunakan oleh semua aplikasi pembayaran"
    }
};

let metodeDipilih = "";

function tampilkanInfo(metode) {
    metodeDipilih = metode;
    const area = document.getElementById('infoArea');
    const judul = document.getElementById('judulInfo');
    const konten = document.getElementById('kontenInfo');

    if (metode === "qris") {
        judul.textContent = DATA_PEMBAYARAN.qris.judul;
        konten.innerHTML = `
            <p>Scan kode QR di bawah ini untuk membayar:</p>
            <img src="qris/qr.jpeg" alt="QRIS Pembayaran" class="qris-gambar">
            <p class="info-bawah">${DATA_PEMBAYARAN.qris.keterangan}</p>
        `;
    } else {
        const data = DATA_PEMBAYARAN[metode];
        judul.textContent = data.judul;
        konten.innerHTML = `
            <p>Silakan transfer ke nomor berikut:</p>
            <div class="nomor-akun">${data.nomor}</div>
            <p>A/N: ${data.an}</p>
            <p class="info-bawah">Lakukan pembayaran sesuai nominal yang diminta</p>
        `;
    }

    area.style.display = 'block';
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function arahkanKeWA() {
    if (!metodeDipilih) return;

    const data = DATA_PEMBAYARAN[metodeDipilih];
    let pesan = "";

    if (metodeDipilih === "qris") {
        pesan = `Halo Kak, saya sudah selesai melakukan pembayaran menggunakan *${data.judul}*.%0A%0ASaya lampirkan bukti pembayaran di bawah ini.%0A%0ATerima kasih `;
    } else {
        pesan = `Halo Kak, saya sudah selesai melakukan pembayaran ke:%0A Metode: *${data.judul}*%0A Nomor: ${data.nomor}%0A A/N: ${data.an}%0A%0ASaya lampirkan bukti pembayaran di bawah ini.%0A%0ATerima kasih `;
    }

    const linkWA = `https://wa.me/${WHATSAPP_OWNER}?text=${encodeURIComponent(pesan)}`;
    window.open(linkWA, '_blank');
}

function tutupInfo() {
    document.getElementById('infoArea').style.display = 'none';
}