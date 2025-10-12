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


//the objects
const today = new Date();




// Output
year.innerHTML += `${today.getFullYear()} - Lima, Peru`;

