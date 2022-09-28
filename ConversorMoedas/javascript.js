function Converter (button) {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let elementoBitcoin = document.getElementById("valorBitcoin");

    if(button.id === "real" && valor.length !== 0) {
        let valorEmReal = valorEmDolarNumerico * 5;
        let valorConvertido = "O resultado em real é R$ " + (valorEmReal.toFixed(2));
        elementoValorConvertido.innerHTML = valorConvertido;

        let valorEmBitcoin = valorEmReal * 0.0000097;
        elementoBitcoin.innerHTML = "O valor em bitcoin é R$ " + valorEmBitcoin;
        
    } else if (button.id === "euro" && valor.length !== 0) {
        let valorEmEuro = valorEmDolarNumerico * 1.05;
        let valorConvertido = "O resultado em euro é € " + (valorEmEuro.toFixed(2));
        elementoValorConvertido.innerHTML = valorConvertido;

        let valorEmBitcoin = valorEmEuro * 0.0000050;
        elementoBitcoin.innerHTML = "O valor em bitcoin é € " + valorEmBitcoin;

    }
}