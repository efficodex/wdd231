// randomSong.js — Módulo ES para obtener una canción aleatoria del setlist sin repetir la última

export async function getRandomSong() {
  try {
    const response = await fetch('./data/setlist.json');

    if (!response.ok) {
      throw new Error('No se pudo cargar el setlist');
    }

    const data = await response.json();

    // Leer la última canción guardada en localStorage
    const lastSongTitle = localStorage.getItem('lastSongTitle');

    // Escoger una nueva canción que no sea la misma
    let randomSong;
    do {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomSong = data[randomIndex];
    } while (randomSong.title === lastSongTitle && data.length > 1);

    // Guardar la canción actual como la última mostrada
    localStorage.setItem('lastSongTitle', randomSong.title);

    return randomSong;
  } catch (error) {
    console.error('Error al obtener la canción:', error);
    return null;
  }
}
