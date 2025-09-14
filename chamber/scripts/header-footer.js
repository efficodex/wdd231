//Header - Dark Mode and Menu Toggle
        document.addEventListener("DOMContentLoaded", () => {
            const toggleBtn = document.querySelector(".toggle");
            const menuBtn = document.getElementById("menu_btn");
            const navMenu = document.getElementById("menu");

            // 🌙 Dark mode button
            toggleBtn.addEventListener("click", () => {
                document.body.classList.toggle("dark");
            });

            // ☰ / ❌ Menu button
            menuBtn.addEventListener("click", () => {
                navMenu.classList.toggle("show");
                menuBtn.classList.toggle("open"); // <-- this changes the icon
            });
        });

//Footer - Current Year and Last Modified
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

