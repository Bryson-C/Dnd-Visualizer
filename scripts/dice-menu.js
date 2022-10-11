





console.log('Loaded Dice Script!')

getElem('#dice-roller').addEventListener('click', (e) => {
    let resultBox = getElem('#dice-result')
    let diceCount = getElem('#dice-count').value

    resultBox.innerText = ""

    for (let i = 0; i < diceCount; i++) {
        let random = Math.floor((Math.random() * getElem('#max-dice-number').value) + 1)
        resultBox.innerText += random
        if (i < diceCount-1)
            resultBox.innerText += ", "

    }



})



