document.addEventListener("DOMContentLoaded", () => {
  const messageContainer = document.getElementById("visitMessage");

  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageContainer.textContent = "¡Bienvenido! Si tienes alguna pregunta, háznoslo saber.";
  } else {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor((now - parseInt(lastVisit)) / MS_PER_DAY);

    if (daysDifference < 1) {
      messageContainer.textContent = "¡Vuelves pronto! ¡Genial!";
    } else if (daysDifference === 1) {
      messageContainer.textContent = "Su última visita fue hace 1 día.";
    } else {
      messageContainer.textContent = `Su última visita fue hace ${daysDifference} días.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});
