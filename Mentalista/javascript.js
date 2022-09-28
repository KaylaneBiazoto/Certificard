let numeroSecreto = Math.floor((Math.random() * 10) + 1); // Numeros aleatorios entre 1 e 10
const button = document.getElementById("btn");
let tentativas = document.querySelector(".tentativas");
let tentativaAtual = 3;

Chutar();

function Chutar() {
    button.addEventListener("click", (e) => {
        let resultado = document.getElementById("resultado");
        let dica = document.getElementById("dica");
        let chute = parseInt(document.getElementById("valor").value);

        if (chute === numeroSecreto) {
            resultado.innerHTML = "Você acertou! Um novo número será sorteado.";
            numeroSecreto = Math.floor((Math.random() * 10) + 1);
            dica.innerHTML = "";

            tentativaAtual = 3;
            tentativas.innerHTML = `Número de tentativas: ${tentativaAtual}`;
        } else if (chute > 10 || chute < 1) {
            resultado.style.color = "yellow";
            resultado.innerHTML = "O número precisa ser um valor entre 1 e 10.";
        } else {
            if(Tentativas() != 0) {
                resultado.innerHTML = "Você errou! Tente novamente!";

                if(chute > numeroSecreto) {
                    dica.innerHTML = "O número é menor que " + chute;
                } else if (chute < numeroSecreto) {
                    dica.innerHTML = "O número é maior que " + chute;
                }

            } else {
                resultado.innerHTML = `Tentativas esgotadas! O número secreto é ${numeroSecreto}.`;
                dica.innerHTML = "";
                numeroSecreto = Math.floor((Math.random() * 10) + 1);

                tentativaAtual = 3;
                tentativas.innerHTML = `Número de tentativas: ${tentativaAtual}`;
            }
        }
    })
}

function Tentativas () {
         tentativaAtual--;
         tentativas.innerHTML = `Número de tentativas: ${tentativaAtual}`;
         return tentativaAtual;
}