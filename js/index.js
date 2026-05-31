const meriendas = [
    "Tostadas",
    "Yogur",
    "Frutas",
    "Galletitas",
    "Licuado"
];

const contenedor = document.getElementById("listaMeriendas");

meriendas.forEach(merienda => {
    const div = document.createElement("div");
    div.classList.add("caja");
    div.textContent = merienda;
    contenedor.appendChild(div);
});

function mostrarCantidad() {
    document.getElementById("resultado").textContent =
        `Hay ${meriendas.length} meriendas`;
}

document
    .getElementById("btnCantidad")
    .addEventListener("click", mostrarCantidad);