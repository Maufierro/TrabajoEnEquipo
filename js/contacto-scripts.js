window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    const nameInput = document.querySelector('#contact input[type="text"]');
    const emailInput = document.querySelector('#contact input[type="email"]');
    const messageInput = document.querySelector('#contact textarea');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validar que los campos no estén vacíos
      if (nameInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico');
        emailInput.focus();
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Por favor, ingresa un mensaje');
        messageInput.focus();
        return;
      }
  
      // Aquí puedes agregar el código para enviar los datos del formulario a un servidor
  
      // Resetear el formulario después de enviar los datos
      form.reset();
      alert('¡Mensaje enviado con éxito!');
    });
  });
  