document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("miembros-container");
  const modal = document.getElementById("modal-miembro");
  const closeModalBtn = document.getElementById("close-modal");

  try {
    const response = await fetch("data/miembros.json");
    if (!response.ok) throw new Error("No se pudo cargar el JSON");

    const miembros = await response.json();

    // Generar tarjetas
    miembros.forEach((miembro, index) => {
      const card = document.createElement("article");
      card.classList.add("miembro-card");

      card.innerHTML = `
        <img src="${miembro.foto}" alt="${miembro.nombre}">
        <h3>${miembro.nombre}</h3>
        <p>${miembro.rol}</p>
        <button class="open-modal" data-index="${index}">Más info</button>
      `;

      container.appendChild(card);
    });

    // Evento para abrir modal
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("open-modal")) {
        const index = e.target.dataset.index;
        const miembro = miembros[index];

        document.getElementById("modal-foto").src = miembro.foto;
        document.getElementById("modal-nombre").textContent = miembro.nombre;
        document.getElementById("modal-apodo").textContent = miembro.apodo;
        document.getElementById("modal-rol").textContent = miembro.rol;
        document.getElementById("modal-anios").textContent = miembro.anios_musica;
        document.getElementById("modal-descripcion").textContent = miembro.descripcion;

        modal.showModal();
      }
    });

    // Cerrar modal
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });

  } catch (error) {
    console.error("Error cargando miembros:", error);
  }
});
