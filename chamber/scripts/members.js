async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch members");
    const members = await response.json();
    displayGrid(members); // por defecto grid
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// 🔳 Vista GRID (cards)
function displayGrid(members) {
  const container = document.getElementById("members");
  container.className = "grid"; // aplicar estilo grid
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>📞 ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

// 📋 Vista LIST (tabla con zebra)
function displayList(members) {
  const container = document.getElementById("members");
  container.className = "list"; // aplicar estilo list

  let html = `
    <table class="list-view">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
  `;

  members.forEach((member, index) => {
    html += `
      <tr class="${index % 2 === 0 ? "even" : "odd"}">
        <td>${member.name}</td>
        <td>${member.address}</td>
        <td>${member.phone}</td>
        <td><a href="${member.website}" target="_blank">${member.website}</a></td>
        
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}



// 🔲 Toggle views
document.getElementById("gridBtn").addEventListener("click", async () => {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayGrid(members);
});

document.getElementById("listBtn").addEventListener("click", async () => {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayList(members);
});

// 🚀 Load members
fetchMembers();
