// Obtém a data e hora atual.
const agora = new Date();

// Seleciona o parágrafo onde o horário será exibido.
const horario = document.querySelector('#horario');

// Mostra o horário na página.
horario.textContent =
    'Você acessou esta página às ' +
    agora.toLocaleTimeString('pt-BR');