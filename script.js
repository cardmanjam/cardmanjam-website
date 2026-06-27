const cards = document.querySelectorAll('.floating-card');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 14;
  cards.forEach((card, i) => {
    const base = i === 0 ? -9 : 7;
    card.style.transform = `rotate(${base}deg) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});
