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
    const nombre = document.getElementById('productName').value;
    const categoria = document.getElementById('productCategory').value;
    const precio = parseFloat(document.getElementById('productPrice').value);
    const calificacion = parseFloat(document.getElementById('productRating').value);
    const producto = new Producto(nombre, categoria, precio, calificacion);
    productos.push(producto);
    mostrarProductos();
    document.getElementById('productForm').reset();
});

console.log(productos);


function mostrarProductos() {
    const productList = document.getElementById('productList');
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
        const caroDiv = document.createElement('div');
        caroDiv.textContent = `Producto Más Caro: ${resultados.productoMasCaro.mostrarInfo()}`;
        comparisonResults.appendChild(caroDiv);
    }

    if (resultados.productoMejorCalificado) {
        const calificadoDiv = document.createElement('div');
        calificadoDiv.textContent = `Producto Mejor Calificado: ${resultados.productoMejorCalificado.mostrarInfo()}`;
        comparisonResults.appendChild(calificadoDiv);
    }
}
