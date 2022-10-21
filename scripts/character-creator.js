

const statShortName = ['str','dex','con','int','wis','cha']


getElem('#character-creator-create-button').addEventListener('click', () => {

    let validCharacterStats = true;
    let characterStats = []
    for (let stat of statShortName) {
        let currentStat = getElem(`#character-creator-stat-${stat}`)
        if (currentStat.innerText.length <= 0) validCharacterStats = false
        characterStats.push( currentStat.value )
    }

    let characterSkills = []
    for (let skill in 18) {
        let currentSkill = getElem('#character-creator-skill)
    }


    console.table({
        Name: getElem('#character-creator-name').value,
        Age: getElem('#character-creator-age').value,
        Class: getElem('#character-creator-class').value,
        Stats: (validCharacterStats) ? characterStats : "Invalid",
        Skills:
    })

})