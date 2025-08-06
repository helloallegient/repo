// Letter Animation
window.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector('.hero-title');
  const letters = heroTitle.textContent.split("");
  heroTitle.textContent = "";

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    heroTitle.appendChild(span);
  });
});

// Cursor Follower
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
