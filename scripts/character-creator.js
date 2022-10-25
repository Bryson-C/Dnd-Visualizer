

const statShortName = ['str','dex','con','int','wis','cha']
const statLongName = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']


function showAllocateStatsMenu(posX, posY, elementAllocate) {
    let allocMenu = getElem('#allocate-stats-menu')
    allocMenu.style.left = `${posX}px`
    allocMenu.style.top = `${posY}px`
    allocMenu.style.display = 'grid'
}
function closeAllocateStatsMenu() {
    let allocMenu = getElem('#allocate-stats-menu')
    allocMenu.style.display = 'none'
}

function toggleCharacterCreation() {
    if (getElem('#character-creator-basics').style.display !== 'none')
    {
        getElem('#character-creator-basics').style.display = 'none';
        getElem('#character-creator-stats').style.display = 'none';
        getElem('#character-creator-skills').style.display = 'none';
    }
    else
    {
        getElem('#character-creator-basics').style.display = 'flex';
        getElem('#character-creator-stats').style.display = 'grid';
        getElem('#character-creator-skills').style.display = 'flex';

    }

}


getElem('#character-creator-create-button').addEventListener('click', () => {

    let validCharacterStats = true;
    let characterStats = []
    for (let stat of statShortName) {
        let currentStat = getElem(`#character-creator-stat-${stat}`)
        if (currentStat.innerText.length <= 0) validCharacterStats = false
        characterStats.push( currentStat.value )
    }

    let characterSkills = []
    let characterSkillCount = 18
    for (let i = 0; i < characterSkillCount; i++) {
        let currentSkill = getElem(`#character-creator-skill-${i}`)
        if (currentSkill.checked)
            characterSkills.push(i)
    }


    console.table({
        Name: getElem('#character-creator-name').value,
        Age: getElem('#character-creator-age').value,
        Class: getElem('#character-creator-class').value,
        Stats: (validCharacterStats) ? characterStats : "Invalid",
    })
    console.log(characterSkills)

})
