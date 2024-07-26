# Comparador de Productos Electrónicos

Este es el proyecto final para el curso de JavaScript en CoderHouse. Este proyecto permite a los usuarios comparar productos electrónicos, como celulares, utilizando la API de MercadoLibre.
Estoy muy orgulloso del progreso y los logros alcanzados a lo largo de este camino. Cada entrega ha mostrado una clara evolución y mejora en mis habilidades. Esta es la versión final de mi comparador de productos.

## Características

- **Buscar productos**: Los usuarios pueden buscar productos específicos a través de la API de MercadoLibre.
- **Agregar productos**: Los usuarios pueden agregar productos a la lista de comparación.
- **Eliminar productos**: Los usuarios pueden eliminar productos seleccionados de la lista de comparación.
- **Mostrar imágenes**: Se muestran imágenes de alta calidad de los productos.
- **Comparar características**: Se muestran las características de cada producto, incluyendo imagen, modelo y precio.
- **Comparación avanzada**: Los productos son comparados usando múltiples criterios para determinar el mejor producto.
- **Modo oscuro**: Los usuarios pueden activar el modo oscuro para una mejor experiencia visual.

## Requisitos

- Un navegador web moderno

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GBottarlini/BOTTARLINI_62010_FINAL.git

Navega al directorio del proyecto:
bash
cd comparador-de-productos

## Uso
Abre el archivo index.html en tu navegador.

Utiliza la barra de búsqueda para buscar productos electrónicos y compáralos.

## Estructura del Proyecto

.
├── css
│   ├── styles.css
├── js
│   ├── app.js
├── index.html
└── README.md

## Ejemplo de Código
#Clase Producto

class Producto {
  constructor(nombre, precio, calificacion, imagen, detalles) {
    this.nombre = nombre;
    this.precio = precio;
    this.calificacion = calificacion;
    this.imagen = imagen;
    this.detalles = detalles;
  }

  mostrarInfo() {
    return `${this.nombre}, Precio: $${this.precio}, Calificación: ${this.calificacion}`;
  }
}

## Función para buscar productos en MercadoLibre

const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=5`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio importante antes de hacerlos.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto
Genaro Bottarlini - bottarlini.99@outlook.com

Proyecto Link: https://github.com/GBottarlini/BOTTARLINI_62010_FINAL
