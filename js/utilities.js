function generateRandomNumber() {
    num = Math.floor(Math.random() * 50) + 1;
    return num;
}

function getArrayRandom() {

    const arrayRandom = [];

    while (arrayRandom.length < 5) {

        const num = generateRandomNumber();

        if (!arrayRandom.includes(num)) {

            arrayRandom.push(num);

        }
    }

    return arrayRandom;
}

function generateArrayEl(arrayEl, arrayNum) {

    for (let i = 0; i < 5; i++) {

        const spanEl = document.createElement("span");

        spanEl.innerHTML = ` ${arrayNum[i]} `;

        arrayEl.append(spanEl)

        setTimeout(() => {

            spanEl.innerHTML = "";

        }, 30000);

    }

}

function getNumber(input, arrayNum) {

    let i = 0;

    while (i < 5) {

        const numInput = parseInt(prompt("Inserisci il numero :"));

        for (let j = 0; j < 5; j++) {

            if (numInput == arrayNum[j]) {

                trovato++;

            }
        }

        input.push(numInput);

        i++;
    }

    return input;

}