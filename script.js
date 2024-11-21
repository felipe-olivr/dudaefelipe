
  const slides = document.querySelector('.slides');
  const dotsContainer = document.querySelector('.dots');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentSlide = 0;
  let startX = 0;
  let endX = 0;

  // Criar as bolinhas de navegação
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    currentSlide = index;
    const offset = -index * 100; // Ajusta a posição para cada slide
    slides.style.transform = `translateX(${offset}%)`;

    // Atualiza as bolinhas de navegação
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Slide automático
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }, 3000); // Troca a cada 3 segundos

  // Função para lidar com os gestos de deslizar
  function handleTouchStart(e) {
    startX = e.touches[0].clientX; // Pega a posição inicial do toque
  }

  function handleTouchMove(e) {
    endX = e.touches[0].clientX; // Pega a posição do toque enquanto move
  }

  function handleTouchEnd() {
    if (startX > endX + 50) { // Deslizar para a esquerda
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    } else if (startX < endX - 50) { // Deslizar para a direita
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlide);
    }
  }

  // Adiciona os eventos de toque
  slides.addEventListener('touchstart', handleTouchStart);
  slides.addEventListener('touchmove', handleTouchMove);
  slides.addEventListener('touchend', handleTouchEnd);

  const startDate = new Date("2022-02-12T18:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();
