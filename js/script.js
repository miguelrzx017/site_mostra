// script do site Ciencia Delas
// os dados das cientistas estao no arquivo dados.js

// pega as iniciais do nome (Marie Curie vira MC)
function pegarIniciais(nome) {
  var palavras = nome.split(" ");
  var iniciais = "";
  for (var i = 0; i < palavras.length; i++) {
    // ignora palavras pequenas tipo "da", "de"
    if (palavras[i].length > 2) {
      iniciais = iniciais + palavras[i][0];
    }
    if (iniciais.length == 2) {
      break;
    }
  }
  return iniciais;
}

// cria a foto da cientista
// se a foto nao carregar, mostra um quadrado roxo com as iniciais
function criarFoto(cientista) {
  var img = document.createElement("img");
  img.src = cientista.foto;
  img.alt = "Foto de " + cientista.nome;
  img.referrerPolicy = "no-referrer";

  img.onerror = function () {
    var caixa = document.createElement("div");
    caixa.className = "sem-foto";
    caixa.textContent = pegarIniciais(cientista.nome);
    img.parentNode.replaceChild(caixa, img);
  };

  return img;
}

// mostra os cartoes das cientistas
var lista = document.getElementById("lista-cientistas");

function mostrarCientistas(filtro) {
  lista.innerHTML = ""; // limpa antes de mostrar

  for (var i = 0; i < cientistas.length; i++) {
    var cientista = cientistas[i];

    // se nao for da categoria escolhida, pula
    if (filtro != "all" && cientista.categoria != filtro) {
      continue;
    }

    var areaCurta = cientista.area.split(" · ")[0];

    var cartao = document.createElement("button");
    cartao.className = "cartao";
    cartao.innerHTML =
      '<div class="foto"></div>' +
      "<small>" + areaCurta + "</small>" +
      "<h3>" + cientista.nome + "</h3>" +
      "<p>" + cientista.categoria + "</p>";

    cartao.querySelector(".foto").appendChild(criarFoto(cientista));

    // guarda o numero da cientista no botao
    cartao.setAttribute("data-numero", i);
    cartao.onclick = function () {
      abrirJanela(this.getAttribute("data-numero"));
    };

    lista.appendChild(cartao);
  }
}

mostrarCientistas("all");

// botoes de filtro (Todas, Internacionais, Nacionais)
var botoesFiltro = document.querySelectorAll(".filtros button");

for (var b = 0; b < botoesFiltro.length; b++) {
  botoesFiltro[b].onclick = function () {
    // tira o destaque de todos
    for (var x = 0; x < botoesFiltro.length; x++) {
      botoesFiltro[x].classList.remove("ativo");
    }
    // destaca o que foi clicado
    this.classList.add("ativo");
    mostrarCientistas(this.getAttribute("data-filtro"));
  };
}

// janela com os detalhes da cientista
var janela = document.getElementById("janela");

function abrirJanela(numero) {
  var cientista = cientistas[numero];

  var caixaFoto = document.getElementById("janela-foto");
  caixaFoto.innerHTML = "";
  caixaFoto.appendChild(criarFoto(cientista));

  document.getElementById("janela-categoria").textContent = cientista.categoria;
  document.getElementById("janela-nome").textContent = cientista.nome;
  document.getElementById("janela-area").textContent = cientista.area;
  document.getElementById("janela-quem").textContent = cientista.quem;
  document.getElementById("janela-tese").textContent = cientista.tese;
  document.getElementById("janela-importancia").textContent = cientista.importancia;
  document.getElementById("janela-fonte").href = cientista.fonte;

  janela.showModal();
}

// botao fechar
document.getElementById("botao-fechar").onclick = function () {
  janela.close();
};

// frase aleatoria (botao da parte "E voce?")
var textoFrase = document.getElementById("frase");

function trocarFrase() {
  var sorteio = Math.floor(Math.random() * frases.length);
  textoFrase.textContent = frases[sorteio];
}

trocarFrase(); // ja mostra uma frase quando abre o site
document.getElementById("botao-frase").onclick = trocarFrase;
