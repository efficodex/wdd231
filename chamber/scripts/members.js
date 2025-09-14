async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch members");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>📞 ${member.phone}</p>
      <p>Membership: ${membershipLevel(member.membership)}</p>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

function membershipLevel(level) {
  switch(level) {
    case 3: return "🥇 Gold";
    case 2: return "🥈 Silver";
    case 1: return "👥 Member";
    default: return "Member";
  }
}

// 🔲 Toggle views
document.getElementById("gridBtn").addEventListener("click", () => {
  document.getElementById("members").classList.add("grid");
  document.getElementById("members").classList.remove("list");
});

document.getElementById("listBtn").addEventListener("click", () => {
  document.getElementById("members").classList.add("list");
  document.getElementById("members").classList.remove("grid");
});

// Load members
fetchMembers();