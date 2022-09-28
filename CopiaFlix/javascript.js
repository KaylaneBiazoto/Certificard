const btn = document.querySelector(".addFilme");

let img1 = "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg";
let img2 = "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg";
let img3 = "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_FMjpg_UX1000_.jpg";

let listaFilmes = [img1, img2, img3];
let novoFilme = "https://m.media-amazon.com/images/M/MV5BYThhZDdiMjItYzRkNy00OTE3LTk5ZDEtMzUwNzE1ZmJkMTYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg";

adicionarFilme();

for (let i = 0; i < listaFilmes.length; i++) {
    if(Repeticao() == false) {
        console.log("O filme já foi adicionado. Por favor, insira outro.");
    } else {
        listaFilmes.push(novoFilme);
    }

    document.write("<img src=" + listaFilmes[i] + ">");
}

function Repeticao () {
    
    for (let i = 0; i < listaFilmes.length; i++) {
        if (novoFilme == listaFilmes[i]) {
           return false; 
        } 
    } 
}

function adicionarFilme() {
    btn.addEventListener("click", () => {
        let campoFilmeFavorito = document.getElementById("filme").value;
        if(campoFilmeFavorito.endsWith(".jpg")) {
            listarFilmesNaTela(campoFilmeFavorito);
        } else {
            console.error("Endereço de filme inválido");
        }

        document.getElementById("filme").value= "";
    })
}

function listarFilmesNaTela (filme) {
    let elementoFilmeFavorito = "<img src=" + filme + ">";
    let lista = document.getElementById("listaFilmes");
    lista.innerHTML = lista.innerHTML + elementoFilmeFavorito;
}
