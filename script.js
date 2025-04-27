let numeroSecreto = Math.floor(Math.random() * 1001);
let tentativas = 0;

function tentar() {
  const input = document.getElementById('inputChute');
  const mensagem = document.getElementById('mensagem');
  const tentativasElemento = document.getElementById('tentativas');
  const reiniciarBtn = document.getElementById('reiniciar');

  let chute = Number(input.value);

  if (chute < 0 || chute > 1000) {
    mensagem.textContent = "Por favor, chute um número entre 0 e 1000!";
    return;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    mensagem.innerHTML = `🎉 Parabéns! Você acertou o número secreto <strong>${numeroSecreto}</strong> em ${tentativas} tentativas.`;
    input.disabled = true;
    reiniciarBtn.style.display = 'inline-block';
  } else if (chute > numeroSecreto) {
    mensagem.textContent = "❌ Errou... O número secreto é menor!";
  } else {
    mensagem.textContent = "❌ Errou... O número secreto é maior!";
  }

  tentativasElemento.textContent = `Tentativas: ${tentativas}`;
  input.value = '';
  input.focus();
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 1001);
  tentativas = 0;

  document.getElementById('inputChute').value = '';
  document.getElementById('inputChute').disabled = false;
  document.getElementById('mensagem').textContent = "Tente adivinhar o número de 0 a 1000:";
  document.getElementById('tentativas').textContent = "Tentativas: 0";
  document.getElementById('reiniciar').style.display = 'none';
}
