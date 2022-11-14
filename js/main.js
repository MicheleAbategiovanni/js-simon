const arrayRandom = getArrayRandom();
const textEl = document.querySelector(".row :nth-child(2)")
let trovato = 0;
let arrayInput = [];

generateArrayEl(textEl, arrayRandom);

setTimeout(() => {

    getNumber(arrayInput, arrayRandom);

    console.log(arrayInput)

    console.log(trovato);

    if (trovato === 1) {
        alert(`Hai trovato la bellezza di 1 numero`)
        alert(`Numero trovato  : ${arrayInput}`)

    } else if (trovato > 1) {

        alert(`Hai trovato la bellezza di ${trovato} numeri`)
        alert(`I numeri trovati sono : ${arrayInput}`)


    } else if (trovato == 0) {

        alert(`Hai trovato numeri ${trovato} numeri... dai riprova !`)

    }

}, 31000);

