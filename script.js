const contenedor = document.getElementById("contenedor-productos");

fetch("products.json")
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar el archivo JSON");
    return response.json();
  })
  .then(datos => {
    datos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");

      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error("No se pudo cargar el catálogo:", error));




