// ==========================
// HRYET QR SYSTEM
// ==========================

// Obtener el ID desde la URL
const params = new URLSearchParams(window.location.search);

const userId = params.get("id") || "HRYET-0001";

// Construir la URL del perfil
const profileURL =
window.location.origin +
window.location.pathname +
"?id=" +
userId;

// Contenedor del QR
const qrContainer = document.getElementById("qr");

if (qrContainer) {

    qrContainer.innerHTML = `
        <h3>Código QR Personal</h3>

        <div id="qrcode"></div>

        <p><strong>ID:</strong> ${userId}</p>
    `;

    new QRCode(document.getElementById("qrcode"), {
        text: profileURL,
        width: 220,
        height: 220,
        colorDark: "#8b5cf6",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

}