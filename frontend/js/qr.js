// =========================
// HRYET QR SYSTEM
// =========================

// ID único del usuario
const userId = "HRYET-0001";

// URL del perfil
const profileURL =
window.location.origin +
"/frontend/profile.html?id=" +
userId;

// Mostrar temporalmente el enlace
const qrContainer = document.getElementById("qr");

if(qrContainer){

qrContainer.innerHTML = `
<div class="qr-box">

<h3>Tu Código QR</h3>

<p>${profileURL}</p>

</div>
`;

}