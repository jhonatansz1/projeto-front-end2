document.addEventListener("DOMContentLoaded", function () {
const nomeProjeto = "Catálogo de Games";
const versao = 1;
const informacoes = { nome: nomeProjeto, versao: versao };

const formulario = document.querySelector("#contact-form");
if (formulario) {
const status = document.querySelector("#form-status");
const lista = document.querySelector("#saved-messages");
const chave = "mensagensGames";

let mensagens = JSON.parse(localStorage.getItem(chave)) || [];

function mostrarMensagens() {
  lista.innerHTML = "";
  for (let i = 0; i < mensagens.length; i++) {
    const item = document.createElement("li");
    item.textContent = mensagens[i].nome + " — " + mensagens[i].assunto;
    lista.appendChild(item);
  }
  }
  mostrarMensagens();
 formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const novoRegistro = {
      nome: document.querySelector("#nome").value.trim(),
      email: document.querySelector("#email").value.trim(),
      assunto: document.querySelector("#assunto").value,
      mensagem: document.querySelector("#mensagem").value.trim()
    };
    if (novoRegistro.nome.length < 3 || novoRegistro.mensagem.length < 10) {
      status.textContent = "Confira os campos antes de enviar.";
    } else {
      mensagens.push(novoRegistro);
      localStorage.setItem(chave, JSON.stringify(mensagens));
      status.textContent = "Mensagem salva neste navegador.";
      formulario.reset();
      mostrarMensagens();
    }
  });
}

const rodape = document.querySelector(".site-footer p");
  if (rodape) {
  rodape.title = informacoes.nome + " - versão " + informacoes.versao;
  }
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const alerta = document.getElementById('form-alert');
    if (alerta) {
      alerta.classList.remove('d-none');
    }
  });
}
