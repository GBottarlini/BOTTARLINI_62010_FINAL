class Producto {
    constructor(nombre, categoria, precio, calificacion) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.calificacion = calificacion;
    }

    mostrarInfo() {
        return `${this.nombre} - Categoría: ${this.categoria}, Precio: ${this.precio}, Calificación: ${this.calificacion}`;
    }
}

const productos = [];

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validación de datos
    const nombre = document.getElementById('productName').value;
    const categoria = document.getElementById('productCategory').value;
    let precio = parseFloat(document.getElementById('productPrice').value);
    let calificacion = parseFloat(document.getElementById('productRating').value);

    // Manejo de errores
    if (isNaN(precio) || precio <= 0) {
        alert('Por favor, ingresa un precio válido.');
        return;
    }
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 5) {
        alert('Por favor, ingresa una calificación válida (entre 0 y 5).');
        return;
    }

    const producto = new Producto(nombre, categoria, precio, calificacion);
    productos.push(producto);
    mostrarProductos();
    document.getElementById('productForm').reset();
});

function mostrarProductos() {
    const productList = document.getElementById('productsList');
    productList.innerHTML = '';
    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.mostrarInfo();
        productList.appendChild(li);
    });
}

document.getElementById('compareButton').addEventListener('click', function() {
    const resultados = compararProductos();
    mostrarResultados(resultados);
});

function compararProductos() {
    if (productos.length < 2) {
        alert('Por favor, agrega al menos dos productos para comparar.');
        return {};
    }

    const productoMasCaro = productos.reduce((prev, curr) => (prev.precio > curr.precio ? prev : curr));
    const productoMejorCalificado = productos.reduce((prev, curr) => (prev.calificacion > curr.calificacion ? prev : curr));

    return { productoMasCaro, productoMejorCalificado };
}

function mostrarResultados(resultados) {
    const comparisonResults = document.getElementById('comparisonResults');
    comparisonResults.innerHTML = '';

    if (resultados.productoMasCaro) {
        const caroDiv = document.createElement('li');
        caroDiv.textContent = `Producto Más Caro: ${resultados.productoMasCaro.mostrarInfo()}`;
        comparisonResults.appendChild(caroDiv);
    }

    if (resultados.productoMejorCalificado) {
        const calificadoDiv = document.createElement('li');
        calificadoDiv.textContent = `Producto Mejor Calificado: ${resultados.productoMejorCalificado.mostrarInfo()}`;
        comparisonResults.appendChild(calificadoDiv);
    }
}
