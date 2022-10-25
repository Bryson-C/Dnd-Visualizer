





console.log('Loaded Dice Script!')


function roll(diceSides, diceCount) {
    let rolls = []
    for (let i = 0; i < diceCount; i++) {
        rolls.push(randomInt(diceSides, 1))
    }
    return rolls
}

getElem('#dice-roller').addEventListener('click', (e) => {
    let diceCount = getElem('#dice-count')
    let maxDiceNumber = getElem('#max-dice-number')

    let resultBox = getElem('#dice-result')
    resultBox.innerHTML = ''

    for (let i = 0; i < diceCount.value; i++) {
        let newRoll = createElem('span', `dice-result-${i}`, '')
        newRoll.innerText = randomInt(maxDiceNumber.value, 1)
        newRoll.addEventListener('click', (e)=>{
            showAllocateStatsMenu(e.x, e.y, newRoll)
        })
        resultBox.appendChild(newRoll)
    }
})



