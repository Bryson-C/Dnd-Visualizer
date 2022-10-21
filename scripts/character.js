

const names = [
        'Liam', 'Olivia',
     	'Noah', 'Emma',
     	'Oliver', 'Charlotte',
     	'Elijah', 'Amelia',
     	'James', 'Ava',
     	'William', 'Sophia',
     	'Benjamin', 'Isabella',
     	'Lucas', 'Mia',
     	'Henry', 'Evelyn',
     	'Theodore', 'Harper',
     	'Jack', 'Luna',
     	'Levi', 'Camila',
     	'Alexander', 'Gianna',
     	'Jackson', 'Elizabeth',
     	'Mateo', 'Eleanor',
     	'Daniel', 'Ella',
     	'Michael', 'Abigail',
     	'Mason', 'Sofia',
     	'Sebastian', 'Avery',
     	'Ethan', 'Scarlett',
     	'Logan', 'Emily',
     	'Owen', 'Aria',
     	'Samuel', 'Penelope',
     	'Jacob', 'Chloe',
     	'Asher', 'Layla',
     	'Aiden', 'Mila',
     	'John', 'Nora',
     	'Joseph', 'Hazel',
     	'Wyatt', 'Madison',
     	'David', 'Ellie',
     	'Leo', 'Lily',
     	'Luke', 'Nova',
     	'Julian', 'Isla',
     	'Hudson', 'Grace',
     	'Grayson', 'Violet',
     	'Matthew', 'Aurora',
     	'Ezra', 'Riley',
     	'Gabriel', 'Zoey',
     	'Carter', 'Willow',
     	'Isaac', 'Emilia',
     	'Jayden', 'Stella',
     	'Luca', 'Zoe',
     	'Anthony', 'Victoria',
     	'Dylan', 'Hannah',
     	'Lincoln', 'Addison',
     	'Thomas', 'Leah',
     	'Maverick', 'Lucy',
     	'Elias', 'Eliana',
     	'Josiah', 'Ivy',
     	'Charles', 'Everly',
     	'Caleb', 'Lillian',
     	'Christopher', 'Paisley',
     	'Ezekiel', 'Elena',
     	'Miles', 'Naomi',
     	'Jaxon', 'Maya',
     	'Isaiah', 'Natalie',
     	'Andrew', 'Kinsley',
     	'Joshua', 'Delilah',
     	'Nathan', 'Claire',
     	'Nolan', 'Audrey',
     	'Adrian', 'Aaliyah',
     	'Cameron', 'Ruby',
     	'Santiago', 'Brooklyn',
     	'Eli', 'Alice',
     	'Aaron', 'Aubrey',
     	'Ryan', 'Autumn',
     	'Angel', 'Leilani',
     	'Cooper', 'Savannah',
     	'Waylon', 'Valentina',
     	'Easton', 'Kennedy',
     	'Kai', 'Madelyn',
     	'Christian', 'Josephine',
     	'Landon', 'Bella',
     	'Colton', 'Skylar',
     	'Roman', 'Genesis',
     	'Axel', 'Sophie',
     	'Brooks', 'Hailey',
     	'Jonathan', 'Sadie',
     	'Robert', 'Natalia',
     	'Jameson', 'Quinn',
     	'Ian', 'Caroline',
     	'Everett', 'Allison',
     	'Greyson', 'Gabriella',
     	'Wesley', 'Anna',
     	'Jeremiah', 'Serenity',
     	'Hunter', 'Nevaeh',
     	'Leonardo', 'Cora',
     	'Jordan', 'Ariana',
     	'Jose', 'Emery',
     	'Bennett', 'Lydia',
     	'Silas', 'Jade',
     	'Nicholas', 'Sarah',
     	'Parker', 'Eva',
     	'Beau', 'Adeline',
     	'Weston', 'Madeline',
     	'Austin', 'Piper',
     	'Connor', 'Rylee',
     	'Carson', 'Athena',
     	'Dominic', 'Peyton',
     	'Xavier', 'Everleigh',
     	'Jaxson', 'Vivian',
     	'Jace', 'Clara',
     	'Emmett', 'Raelynn',
     	'Adam', 'Liliana',
     	'Declan', 'Samantha',
     	'Rowan', 'Maria',
     	'Micah', 'Iris',
     	'Kayden', 'Ayla',
     	'Gael', 'Eloise',
     	'River', 'Lyla',
     	'Ryder', 'Eliza',
     	'Kingston', 'Hadley',
     	'Damian', 'Melody',
     	'Sawyer', 'Julia',
]
const nameSuffices = [
    'ly', 'son', 'man'
]

function randomName() {
    let nameSuffix = nameSuffices[Math.floor(Math.random() * nameSuffices.length)]
    let name = names[Math.floor(Math.random() * names.length)]
    let lastChars = name.substring((name.length-nameSuffix.length), name.length)
    return name + ((nameSuffix !== lastChars && randomInt(3,0) > 1) ? nameSuffix : '');
}


class Character {
    constructor() {
        this.name = ''
        this.playerClass = ''
        this.level = 0
        this.race = ''
        this.alignment = ''
        this.background = ''
        this.playerName = ''
        this.expPoints = 0

		this.gold = 0
		this.silver = 0
		this.copper = 0

        this.age = 0
        this.height = 0
        this.weight = 0
        this.eyeColor = ''
        this.skinColorOrRacistCount = ''
        this.hairColor = ''

        this.strength = 0
        this.dexterity = 0
        this.constitution = 0
        this.intellegence = 0
        this.wisdom = 0
        this.charisma = 0

        this.armorClass = 0
        this.initiative = 0
        this.speed = 0
        this.hitPoints = 0
        this.currentHitPoints = 0
        this.temporaryHitPoints = 0

        this.personalityTraits = ''
        this.ideals = ''
        this.bonds = ''
        this.flaws = ''

        this.languages = ['']
        this.equiptments = ['']
        this.featuresAndTraits = ''

        this.Acrobatics = -1;
        this.AnimalHandling = -1;
        this.Arcana = -1;
        this.Athletics = -1;
        this.Deception = -1;
        this.History = -1;
        this.Insight = -1;
        this.Intimidation = -1;
        this.Investigation = -1;
        this.Medicine = -1;
        this.Nature = -1;
        this.Perception = -1;
        this.Performance = -1;
        this.Persuasion = -1;
        this.Religion = -1;
        this.SleightOfHand = -1;
        this.Stealth = -1;
        this.Survival = -1;

        this.cantrips = ['']
        this.spells = ['']
        this.spellSlots = 0
    };
}

/*
let allCharacters = []

function createCharacter() {
	let character = Character;
	character.prototype.name = randomName();

	allCharacters.push(character)

	return character
}

function loadAllCharacters(menuIdentity) {
	let allCharactersMenu = getElem(menuIdentity)
	let newCharacter = createElem('span', `player $iteration`, 'character-card')
	let iteration = 0
	for (let character of allCharacters) {
		let newCharacter = createElem('span', `player $iteration`, 'character-card')
		newCharacter.style.backgroundColor = "blue"
		newCharacter.innerText = '';
		allCharactersMenu.appendChild(newCharacter)
		iteration++
	}
}

document.onload = () => createCharacter()
*/