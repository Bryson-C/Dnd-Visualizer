





console.log('Loaded Dice Script!')




getElem('#dice-roller').addEventListener('click', (e) => {
    let resultBox = getElem('#dice-result')
    let diceCount = getElem('#dice-count')
    let maxDiceNumber = getElem('#max-dice-number')

    resultBox.innerText = ""

    for (let i = 0; i < diceCount.value; i++) {
        let random = randomInt(maxDiceNumber.value, 1)
        resultBox.innerText += random
        if (i < diceCount.value-1)
            resultBox.innerText += ", "

    }


})



