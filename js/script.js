document.addEventListener("DOMContentLoaded", function () {
const nomeProjeto = "Catálogo de Games";
const versao = 1;
const informacoes = {
  nome: nomeProjeto,
  versao: versao
  };
const formulario = document.querySelector("#contact-form");
const alerta = document.querySelector("#form-alert");
const lista = document.querySelector("#saved-messages");
const chave = "mensagensGames";

let mensagens = [];
  try {
    mensagens = JSON.parse(localStorage.getItem(chave)) || [];
    if (!Array.isArray(mensagens)) mensagens = [];
  } catch (erro) {
    mensagens = [];
  }

  function mostrarMensagens() {
    if (!lista) return;

    lista.innerHTML = "";
    for (let i = 0; i < mensagens.length; i++) {
      const item = document.createElement("li");
      item.textContent = mensagens[i].nome + " — " + mensagens[i].assunto;
      lista.appendChild(item);
    }
  }

  mostrarMensagens();

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const novoRegistro = {
        nome: document.querySelector("#nome").value.trim(),
        email: document.querySelector("#email").value.trim(),
        assunto: document.querySelector("#assunto").value,
        mensagem: document.querySelector("#mensagem").value.trim()
      };
      if (
        novoRegistro.nome.length < 3 ||
        !/^[A-Za-zÀ-ÿ ]+$/.test(novoRegistro.nome) ||
        novoRegistro.mensagem.length < 10 ||
        novoRegistro.assunto === ""
      ) {
        if (alerta) {
          alerta.textContent = "Confira os campos: nome, assunto e mensagem.";
          alerta.classList.remove("d-none");
          alerta.classList.remove("alert-success");
          alerta.classList.add("alert-danger");
        }
        return;
      }

      mensagens.push(novoRegistro);
      localStorage.setItem(chave, JSON.stringify(mensagens));

      if (alerta) {
        alerta.textContent = "Mensagem salva neste navegador!";
        alerta.classList.remove("d-none", "alert-danger");
        alerta.classList.add("alert-success");
      }

      formulario.reset();
      mostrarMensagens();
    });
  }
const rodape = document.querySelector(".site-footer p");
  if (rodape) {
    rodape.title = informacoes.nome + " - versão " + informacoes.versao;
  }
});
