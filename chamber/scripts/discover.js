document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#discover_main");

  fetch("data/discover.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(place => {
        // Contenedor de tarjeta
        const card = document.createElement("div");
        card.classList.add("card_discover");

        // Título
        const title = document.createElement("h2");
        title.textContent = place.name;

        // Imagen en figure
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = place.photo;
        img.alt = place.name;
        img.loading = "lazy"; // Lazy-loading 
        figure.appendChild(img);


        // Dirección
        const address = document.createElement("address");
        address.textContent = place.location;

        // Descripción
        const description = document.createElement("p");
        description.textContent = place.description;

        // Botón
        const button = document.createElement("button");
        button.textContent = "Learn more";
        button.classList.add("btn_discover");
        button.setAttribute("aria-label", "Learn more about this place");


        // Ensamblar tarjeta
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        main.appendChild(card);
      });
    })
    .catch(err => console.error("Error al cargar discover.json:", err));
});
