// Selección de elementos
const inicio = document.getElementById('inicio');
const cartas = document.getElementById('cartas');
const mensaje = document.getElementById('mensaje');
const btnSorpresa = document.getElementById('btn-sorpresa');
const btnRegresar = document.getElementById('btn-regresar');
const mensajeTexto = document.getElementById('mensaje-texto');
const cartasElements = document.querySelectorAll('.card');
const heartsContainer = document.getElementById('hearts-container');

// Función para cambiar de sección
function mostrarSeccion(seccion) {
  [inicio, cartas, mensaje].forEach(s => s.classList.remove('active'));
  seccion.classList.add('active');
}

// Botón sorpresa -> mostrar cartas
btnSorpresa.addEventListener('click', () => {
  mostrarSeccion(cartas);
});

// Al hacer click en cada carta
cartasElements.forEach(carta => {
  carta.addEventListener('click', () => {
    mensajeTexto.textContent = carta.dataset.msg;
    mostrarSeccion(mensaje);
  });
});

// Botón regresar -> volver a cartas
btnRegresar.addEventListener('click', () => {
  mostrarSeccion(cartas);
});

// Animación de corazones
function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  heart.style.fontSize = (15 + Math.random() * 25) + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);
