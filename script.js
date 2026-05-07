function abrir() {
    const sobre = document.getElementById("sobre");
    const invitacion = document.getElementById("invitacion");

    sobre.classList.add("fade-out");

    setTimeout(() => {
        sobre.style.display = "none";
        invitacion.classList.add("mostrar");
    }, 800);
}
