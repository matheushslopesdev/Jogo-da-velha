let jogador = 'jogador1';
const board = document.querySelector('.board');
const restart = document.querySelector('#restartButton');

// Combinações vencedoras
const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6] 
];


function verificarVencedor() {
  const celulas = Array.from(board.children);
  
  for (let combinacao of combinacoesVencedoras) {
    const [a, b, c] = combinacao;
    const valorA = celulas[a].innerHTML;
    const valorB = celulas[b].innerHTML;
    const valorC = celulas[c].innerHTML;

    if (valorA !== '' && valorA === valorB && valorA === valorC) {
      return valorA;
    }
  }

  return null;
}


board.addEventListener('click', e => {
  let el = e.target;
  let selecionado = document.getElementById(el.id);

  if (!selecionado.classList.contains('Selecionado')) {
    if (jogador === 'jogador1') {
      selecionado.innerHTML = 'X';
      selecionado.classList.add('Selecionado');
      jogador = 'jogador2';
    } else {
      selecionado.innerHTML = 'O';
      selecionado.classList.add('Selecionado');
      jogador = 'jogador1';
    }

    let vencedor = verificarVencedor();
    if (vencedor) {
      setTimeout(() => {
        alert(`O jogador com "${vencedor}" venceu!`);
        reiniciarJogo(); 
      }, 100);
    }
  } else {
    alert('Já Selecionado, Selecione Outro');
  }
});


function reiniciarJogo() {
  for (let valor of board.children) {
    valor.innerHTML = "";
    valor.classList.remove("Selecionado");
  }
  jogador = 'jogador1';
}

restart.addEventListener('click', e => {
  reiniciarJogo();
});