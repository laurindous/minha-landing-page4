document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsapp-form');
    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = document.querySelector('input[type="tel"]').value;
        // Adicione a lógica para redirecionar para o aplicativo de mensagens com o número de WhatsApp aqui
        console.log('Redirecionando para o número de WhatsApp: ' + phoneNumber);
    });
});
