document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(e) {
        const nombreProducto = e.target.dataset.nombre;
        const precioProducto = Number(e.target.dataset.precio);

        carrito.push({ nombre: nombreProducto, precio: precioProducto });
        actualizarCarrito();
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';

        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(li);
        });

        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        totalCarrito.textContent = total;
    }
});
