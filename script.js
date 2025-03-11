// Função para criar um contador regressivo
function iniciarContador() {
  const dataFinal = new Date();
  dataFinal.setDate(dataFinal.getDate() + 7); // Exemplo: promoção válida por 7 dias

  function atualizarContador() {
    const agora = new Date();
    const diferenca = dataFinal - agora;

    if (diferenca <= 0) {
      document.getElementById("contador").innerHTML = "🚀 Promoção encerrada!";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById(
      "contador"
    ).innerHTML = `⏳ Promoção acaba em: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarContador);

function criarCoracoes() {
  const coracao = document.createElement("i");
  coracao.classList.add("fa", "fa-heart", "floating-hearts");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(coracao);

  setTimeout(() => coracao.remove(), 5000);
}

setInterval(criarCoracoes, 500);
