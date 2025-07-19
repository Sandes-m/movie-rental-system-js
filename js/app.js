function alterarStatus(id) {
   let game = document.getElementById(`game-${id}`);
   let imagem = game.querySelector('.dashboard__item__img');
   let botao = game.querySelector('.dashboard__item__button');
   let nomeJogo = game.querySelector('.dashboard__item__name');

if (botao.textContent == 'Alugar') {
    botao.textContent = 'Devolver';
    imagem.classList.contains('dashboard__item__img');
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.contains('dashboard__item__button');
    botao.classList.add('dashboard__item__button--return');

    contadorJogosAlugados();
} else {
    if(confirmarDevolucao() == 'sim') {
    botao.textContent = 'Alugar';
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
   } else {
    return;
   }
    
    contadorJogosAlugados();
} 

}

function confirmarDevolucao() {
    let resposta = prompt('Para confirmar devolução digite (Sim) para cancelar digite (Não)');
    
    if (resposta == null) {
        alert('Ação cancelada pelo usuário!');
        return 'não'; 
    }

    let confirmar = resposta.toLowerCase();

    if (confirmar == 'sim') {
        alert('Parabéns, devolução realizada com sucesso!');
        return 'sim';
    } else if (confirmar == 'não') {
        alert('Devolução cancelada!');
        return 'não';
    } else {
        alert('Resposta inválida digite (Sim), (Não) ou aperte no botão (cancelar)');
        return confirmarDevolucao();
    }
}

function contadorJogosAlugados() {
    let contador = document.querySelectorAll('.dashboard__item__button--return');
alert(`A quantidade de jogos alugados é: ${contador.length}!`);

}