const tarjetas =
    document.querySelectorAll(".tarjeta");

const contador =
    document.getElementById("contador");

function actualizarContador() {

    const seleccionadas =
        document.querySelectorAll(".seleccionada");

    contador.textContent =
        `Seleccionadas: ${seleccionadas.length}`;
}

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        tarjeta.classList.toggle("seleccionada");

        actualizarContador();
    });

});