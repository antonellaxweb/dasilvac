document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-btn-contact');

  const toggleMenu = () => {
    const isOpen = mobileDrawer.classList.contains('is-open');

    if (isOpen) {
      mobileDrawer.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    } else {
      mobileDrawer.classList.add('is-open');
      menuToggle.classList.add('is-active');
      menuToggle.setAttribute('aria-label', 'Cerrar menú');
    }
  };

  menuToggle?.addEventListener('click', toggleMenu);

  // Cerrar el menú al hacer clic en cualquier enlace
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const whatsappForm = document.getElementById('whatsappForm');

  if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que la página se recargue

      // Capturar los valores de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const servicio = document.getElementById('servicio').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      // Número de WhatsApp de destino (sin el + pero con código de país y área)
      const phoneNumber = "5491160543548";

      // Crear el mensaje estructurado con saltos de línea (%0A)
      const text = `¡Hola! Me comunico desde la web de Da Silva Construcciones.%0A%0A` +
                   `*Detalles de la solicitud:*%0A` +
                   `• *Nombre:* ${nombre}%0A` +
                   `• *E-mail:* ${email}%0A` +
                   `• *Teléfono:* ${telefono}%0A` +
                   `• *Servicio:* ${servicio}%0A` +
                   `• *Mensaje:* ${mensaje}`;

      // Generar la URL de WhatsApp y abrirla en una nueva pestaña
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(whatsappURL, '_blank');
    });
  }
});