// Leer datos desde la URL
const params = new URLSearchParams(window.location.search);

const name = params.get('name') || 'No recibido';
const email = params.get('email') || 'No recibido';
const subject = params.get('subject') || 'No recibido';
const message = params.get('message') || 'No recibido';

// Mostrar los datos en pantalla
const resultsDiv = document.getElementById('form-results');
resultsDiv.innerHTML = `
  <h2>Datos recibidos:</h2>
  <p><strong>Nombre:</strong> ${name}</p>
  <p><strong>Correo:</strong> ${email}</p>
  <p><strong>Asunto:</strong> ${subject}</p>
  <p><strong>Mensaje:</strong> ${message}</p>
`;

// Número de WhatsApp (cámbialo por el definitivo)
const phone = "51946432834"; // mi numero

document.getElementById('send-whatsapp').addEventListener('click', () => {
  const text = `Nuevo mensaje de contacto:%0A
Nombre: ${name}%0A
Correo: ${email}%0A
Asunto: ${subject}%0A
Mensaje: ${message}`;

  const url = `https://wa.me/${phone}?text=${text}`;
  window.location.href = url;
});
