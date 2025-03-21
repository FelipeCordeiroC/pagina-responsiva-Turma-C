function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    document.querySelector('form').reset();
}