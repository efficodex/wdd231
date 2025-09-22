async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    // Filtrar gold o silver
    const filtered = members.filter(m => m.membership >= 2);

    // Mezclar aleatoriamente
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Seleccionar 2 o 3
    const selected = shuffled.slice(0, 3);

    const container = document.querySelector(".spotlight-container");

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <span class="badge">${member.membership === 3 ? "Gold" : "Silver"} Member</span>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

loadSpotlights();



//weather Api

const currentTemp = document.querySelector ('#current-temp');
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc = document.querySelector ('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.04&lon=-77.02&units=imperial&appid=6ba33a6b5a98aa92151ac10ed19afe82'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('width','50');
    weatherIcon.setAttribute('height','50');
    captionDesc.textContent = `${desc}`;
}