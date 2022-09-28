const button = document.querySelector(".btn");
let elements = document.getElementsByClassName("num");
let average = document.querySelector(".average");

getGrades();

function getGrades () {
    let total = 0;
    let num;
    let quantidadeDeValores = 0;

    button.addEventListener("click", function firstClick(e) {
        for (let i = 0; i < elements.length; i++) {
            num = parseFloat(elements[i].value);

            if(isNaN(num)){
                num = 0;
                quantidadeDeValores--;
            }

            total = total + num;
            quantidadeDeValores++;
        }

        if(!isNaN(total)) {
            total = total/quantidadeDeValores;
            average.innerHTML = total.toFixed(2);
            average.classList.add("show");
            button.disabled = true;
        }
    })

}
