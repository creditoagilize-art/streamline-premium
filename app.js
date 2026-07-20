
// Streamline Premium - app.js

document.addEventListener("DOMContentLoaded", () => {

  // Fecha menu automaticamente (preparado para menu mobile)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });

  // Animação simples ao revelar elementos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll(".card, details, .hero, .cta").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  console.log("Streamline Premium carregado.");
});
