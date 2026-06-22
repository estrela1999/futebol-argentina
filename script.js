// script.js - interatividade básica
document.addEventListener('DOMContentLoaded', function () {
  // Atualiza ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Botão Saiba mais rola para seção Sobre
  const learnBtn = document.getElementById('learnMoreBtn');
  learnBtn.addEventListener('click', function () {
    document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
  });

  // Formulário de contato simulado
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    formMessage.textContent = `Obrigado, ${name}. Sua mensagem foi recebida.`;
    form.reset();
    setTimeout(() => formMessage.textContent = '', 6000);
  });

  // Galeria: clique para ampliar (simples)
  const gallery = document.getElementById('galleryGrid');
  gallery.addEventListener('click', function (e) {
    const img = e.target.closest('img');
    if (!img) return;
    openLightbox(img.src, img.alt);
  });

  function openLightbox(src, alt) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '8px';
    overlay.appendChild(img);

    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  }
});