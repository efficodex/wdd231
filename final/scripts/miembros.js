document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("miembros-container");
  const modal = document.getElementById("modal-miembro");
  const closeModalBtn = document.getElementById("close-modal");

  try {
    const response = await fetch("data/miembros.json");
    if (!response.ok) throw new Error("No se pudo cargar el JSON");

    const miembrosData = await response.json();

    //  Transformamos los datos con map y creamos nombreCompleto
    const miembros = miembrosData.map(function (m) {
      const nuevoObjeto = {
        nombre: m.nombre,
        apodo: m.apodo,
        rol: m.rol,
        foto: m.foto,
        anios_musica: m.anios_musica,
        descripcion: m.descripcion,
        nombreCompleto: m.nombre + ' "' + m.apodo + '"'
      };
      return nuevoObjeto;
    });

    // Generar tarjetas
    miembros.forEach(function (miembro, index) {
      const card = document.createElement("article");
      card.classList.add("miembro-card");

      card.innerHTML = `
        <img src="${miembro.foto}" alt="${miembro.nombreCompleto}" loading="lazy">
        <h3>${miembro.nombreCompleto}</h3>
        <p>${miembro.rol}</p>
        <button class="open-modal" data-index="${index}">Más info</button>
      `;

      container.appendChild(card);
    });

    // Evento para abrir modal
    container.addEventListener("click", function (e) {
      if (e.target.classList.contains("open-modal")) {
        const index = e.target.dataset.index;
        const miembro = miembros[index];

        document.getElementById("modal-foto").src = miembro.foto;
        document.getElementById("modal-nombre").textContent = miembro.nombreCompleto;
        document.getElementById("modal-apodo").textContent = miembro.apodo;
        document.getElementById("modal-rol").textContent = miembro.rol;
        document.getElementById("modal-anios").textContent = miembro.anios_musica;
        document.getElementById("modal-descripcion").textContent = miembro.descripcion;

        modal.showModal();
      }
    });

    //  Cerrar modal
    closeModalBtn.addEventListener("click", function () {
      modal.close();
    });

  } catch (error) {
    console.error("Error cargando miembros:", error);
  }
});
