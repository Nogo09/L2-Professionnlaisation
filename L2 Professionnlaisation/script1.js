// JavaScript simplifié pour le site Camp'us
// Version étudiante — ultra légère


// ----- MENU MOBILE -----
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');


if (menuBtn) {
menuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
}


// ----- SCROLL DOUX -----
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function (e) {
const target = document.querySelector(this.getAttribute('href'));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth' });
mobileMenu.classList.add('hidden');
}
});
});


// ----- PETITES ANIMATIONS (optionnel) -----
// Fade-in simple pour les sections
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('opacity-100', 'translate-y-0');
}
});
});


document.querySelectorAll('.fade').forEach((el) => {
el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
observer.observe(el);
});