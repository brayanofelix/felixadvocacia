document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    const textoMensagem = `Olá, meu nome é ${encodeURIComponent(nome)}. Meu e-mail é ${encodeURIComponent(email)}. Minha mensagem: ${encodeURIComponent(mensagem)}`;
    const numeroTelefone = '5517996727898';
    
    const link = `https://wa.me/${numeroTelefone}?text=${textoMensagem}`;
    window.open(link, '_blank');
  });