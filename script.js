function abrir() {
    const sobre = document.getElementById("sobre");

    sobre.classList.add("fade-out");

    setTimeout(() => {
        sobre.style.display = "none";
        document.getElementById("invitacion").classList.remove("oculto");
    }, 1000);
}
