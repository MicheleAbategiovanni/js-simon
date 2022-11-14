// Dopo inseriti i 5 numeri bisogna dire quanti e quali numeri sono stati indovinati.

const arrayRandom = getArrayRandom();

let trovato = 0;


const textEl = document.querySelector(".row :nth-child(2)")


console.log(arrayRandom);



generateArrayEl(textEl, arrayRandom);


let arrayInput = [];


setTimeout(() => {

    getNumber(arrayInput, arrayRandom);

    console.log(arrayInput)

    console.log(trovato);

    if (trovato === 1) {
        alert(`Hai trovato la bellezza di 1 numero`)

    } else if (trovato > 1) {

        alert(`Hai trovato la bellezza di ${trovato} numeri`)

    } else if (trovato == 0) {

        alert(`Hai trovato numeri ${trovato} numeri... dai riprova !`)

    }

}, 31000);

