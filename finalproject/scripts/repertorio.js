import { toggleMenu } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();

  const container = document.getElementById("songs-container");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.getElementById("close-modal");

  async function loadSongs() {
    try {
      const response = await fetch("data/repertorio.json");
      const songs = await response.json();

      container.innerHTML = songs.map(song => `
        <div class="song-card">
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
          <button class="details-btn">Ver más</button>
        </div>
      `).join("");

      document.querySelectorAll(".details-btn").forEach((btn, i) => {
        btn.addEventListener("click", () => {
          modalBody.innerHTML = `
            <h2>${songs[i].title}</h2>
            <p>Artista: ${songs[i].artist}</p>
            <p>Año: ${songs[i].year}</p>
            <p>Duración: ${songs[i].duration}</p>
          `;
          modal.style.display = "block";
        });
      });
    } catch (error) {
      container.innerHTML = `<p>Error al cargar repertorio</p>`;
    }
  }

  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  loadSongs();
});
