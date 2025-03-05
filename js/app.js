// Quantidades disponíveis iniciais
let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;

// Pegando os elementos do HTML
const selectTipo = document.getElementById('tipo-ingresso');
const inputQtd = document.getElementById('qtd');

// Esses spans exibirão as quantidades disponíveis na tela
const spanPista = document.getElementById('qtd-pista');
const spanSuperior = document.getElementById('qtd-superior');
const spanInferior = document.getElementById('qtd-inferior');

function comprar() {
  // Passo 3.1: Capturar o tipo de ingresso selecionado
  const tipoSelecionado = selectTipo.value; // "pista", "superior" ou "inferior"

  // Passo 3.2: Capturar a quantidade digitada pelo usuário
  const quantidadeDesejada = Number(inputQtd.value);

  // Passo 3.3: Validar se a quantidade é um número válido (maior que zero)
  if (quantidadeDesejada <= 0) {
    alert('Por favor, insira uma quantidade válida (maior que zero).');
    return; // interrompe a função se a quantidade não for válida
  }

  // Passo 3.4: Verificar se há ingressos suficientes
  if (tipoSelecionado === 'pista') {
    // Se a quantidade desejada for maior do que temos em estoque, alerta
    if (quantidadeDesejada > qtdPista) {
      alert(`Quantidade indisponível para pista! Temos apenas ${qtdPista} ingressos disponíveis.`);
      return;
    }
    // Se estiver tudo ok, atualiza o estoque e o span
    qtdPista -= quantidadeDesejada;
    spanPista.textContent = qtdPista;
  } 
  else if (tipoSelecionado === 'superior') {
    if (quantidadeDesejada > qtdSuperior) {
      alert(`Quantidade indisponível para cadeira superior! Temos apenas ${qtdSuperior} ingressos disponíveis.`);
      return;
    }
    qtdSuperior -= quantidadeDesejada;
    spanSuperior.textContent = qtdSuperior;
  } 
  else if (tipoSelecionado === 'inferior') {
    if (quantidadeDesejada > qtdInferior) {
      alert(`Quantidade indisponível para cadeira inferior! Temos apenas ${qtdInferior} ingressos disponíveis.`);
      return;
    }
    qtdInferior -= quantidadeDesejada;
    spanInferior.textContent = qtdInferior;
  }

  // Passo 3.5: Limpar o campo de quantidade após a compra
  inputQtd.value = '';
}