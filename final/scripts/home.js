import { getRandomSong } from './randomSong.js';

async function mostrarCancion() {
  const song = await getRandomSong();
  const container = document.querySelector('#random-song');

  if (song) {
    container.innerHTML = `
      <h3>${song.title}</h3>
      <p><strong>Artista:</strong> ${song.artist}</p>
      <p><strong>Año:</strong> ${song.year}</p>
      <p><strong>Duración:</strong> ${song.duration}</p>
      <a href="${song.link}" class="song-link">Escuchar</a>
    `;
  } else {
    container.textContent = 'No se pudo cargar la canción.';
  }
}

mostrarCancion();
