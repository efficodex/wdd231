//the DOM element for output
const year = document.querySelector("#currentYear");
let lastModified1 = document.querySelector("#lastModified")

//the objects
const today = new Date();
let oLastModif = new Date(document.lastModified);


// date time dd/mm/yyyy hh:mm:ss
const formattedDate = `${oLastModif.getDate().toString().padStart(2, '0')}/` +
                      `${(oLastModif.getMonth() + 1).toString().padStart(2, '0')}/` +
                      `${oLastModif.getFullYear()} ` +
                      `${oLastModif.getHours().toString().padStart(2, '0')}:` +
                      `${oLastModif.getMinutes().toString().padStart(2, '0')}:` +
                      `${oLastModif.getSeconds().toString().padStart(2, '0')}`;

// Output
year.innerHTML += `${today.getFullYear()} - Alexandra Fernandez - Lima, Peru`;
lastModified1.innerHTML += `Last Modification: ${formattedDate}`;