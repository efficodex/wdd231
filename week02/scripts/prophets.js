const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const getProphetData = async () => {
  
    const response = await fetch(url); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the response to be converted to JSON
    //console.table()(data.prophets); // Log the prophets array to the console
    displayProphets(data.prophets);
};
getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    // Build the paragraph content to show the prophet's date and place of birth
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); // append the h2 element to the section(card)
    card.appendChild(birthdate); // append the p element to the section(card)
    card.appendChild(birthplace); // append the p element to the section(card)
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}