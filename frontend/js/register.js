import { register } from "./auth.js";

const form = document.getElementById("registerForm");

const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try {

        await register(name, email, password);

        message.innerHTML = "✅ Cuenta creada correctamente.";

    } catch(error) {

        message.innerHTML = error.message;

    }

});