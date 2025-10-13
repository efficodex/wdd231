async function fetchSetlist() {
  try {
    const response = await fetch("data/setlist.json");
    if (!response.ok) throw new Error("Failed to fetch setlist");
    const songs = await response.json();
    displayGrid(songs); // vista por defecto
  } catch (error) {
    console.error("Error loading setlist:", error);
  }
}

// Vista GRID (cards)
function displayGrid(songs) {
  const container = document.getElementById("setlist");
  container.className = "grid-setlist"; 
  container.innerHTML = "";

  songs.forEach(song => {
    const card = document.createElement("div");
    card.classList.add("song-card");

    card.innerHTML = `
      <h2>${song.title}</h2>
      <p><strong>Artista:</strong> ${song.artist}</p>
      <p><strong>Año:</strong> ${song.year}</p>
      <p><strong>Duración:</strong> ${song.duration}</p>
      <a href="${song.link}" target="_blank">Escuchar</a>
    `;

    container.appendChild(card);
  });
}

// Vista LIST (tabla)
function displayList(songs) {
  const container = document.getElementById("setlist");
  container.className = "list-setlist"; 

  let html = `
    <table class="list-view">
      <thead>
        <tr>
          <th>Título</th>
          <th>Artista</th>
          <th>Año</th>
          <th>Duración</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
  `;

  songs.forEach((song, index) => {
    html += `
      <tr class="${index % 2 === 0 ? "even" : "odd"}">
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>${song.year}</td>
        <td>${song.duration}</td>
        <td><a href="${song.link}" target="_blank">Ver</a></td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

// 🔲 Toggle views
document.getElementById("gridBtn").addEventListener("click", async () => {
  const response = await fetch("data/setlist.json");
  const songs = await response.json();
  displayGrid(songs);
});

document.getElementById("listBtn").addEventListener("click", async () => {
  const response = await fetch("data/setlist.json");
  const songs = await response.json();
  displayList(songs);
});

// 🚀 Cargar setlist al inicio
fetchSetlist();
