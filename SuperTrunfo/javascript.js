let carta1 = {
    nome: "Charizard",
    atributos: {
        ataque: 50,
        defesa: 7,
        magia: 15
    }
}

let carta2 = {
    nome: "Squirtle",
    atributos: {
        ataque: 40,
        defesa: 4,
        magia: 10
    }
}

let carta3 = {
    nome: "Vulpix",
    atributos: {
        ataque: 45,
        defesa: 9,
        magia: 5
    }
}

let cartas = [carta1, carta2, carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta () {
    let indiceCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[indiceCartaMaquina];

    let indiceCartaJogador = parseInt(Math.random() * 3);
    while(indiceCartaJogador == indiceCartaMaquina) {
        indiceCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[indiceCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";

    for(let atributo  in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }

    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    for(let i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    let elementoResultado = document.getElementById("resultado");

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você perdeu! O valor da carta da máquina é " + valorCartaMaquina + ".";
    } else {
        elementoResultado.innerHTML = "Empatou.";
    }
}