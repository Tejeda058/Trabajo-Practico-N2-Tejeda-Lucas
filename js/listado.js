const productos = [
    { nombre: "Manzana", tipo: "fruta" },
    { nombre: "Banana", tipo: "fruta" },
    { nombre: "Naranja", tipo: "fruta" },
    { nombre: "Pan", tipo: "otro" },
    { nombre: "Leche", tipo: "otro" },
    { nombre: "Queso", tipo: "otro" }
];

const contenedor =
    document.getElementById("contenedor");

function mostrar(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("caja");

        div.textContent = producto.nombre;

        contenedor.appendChild(div);

    });
}

mostrar(productos);

document
    .getElementById("todos")
    .addEventListener("click", () => {

        mostrar(productos);

    });

document
    .getElementById("frutas")
    .addEventListener("click", () => {

        const frutas =
            productos.filter(
                producto => producto.tipo === "fruta"
            );

        mostrar(frutas);

    });