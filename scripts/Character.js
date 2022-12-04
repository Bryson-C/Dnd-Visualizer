import { save, load } from "./SaveData.js";
const statShortHand = ['str', 'dex', 'con', 'wis', 'int', 'chr'];
class Character {
    constructor(name, classType) {
        this.name = "";
        this.classType = "";
        this.stats = [];
        this.name = name;
        this.classType = classType;
        for (let i = 0; i < 6; i++)
            this.stats[i] = 0;
    }
}
let characters = load('characters', []);
function saveCharacters() { save('characters', characters); }
export function CreateCharacter(name, classType) {
    characters.push(new Character(name, classType));
}
export function LoadCharactersAsOptions(elementID) {
    let characterOptions = document.getElementById(elementID);
    characterOptions.innerHTML = '';
    characterOptions.innerHTML = characters.length > 0 ? characters[0].name : 'No Characters, Try Creating One!';
    for (let character of characters) {
        let newElement = document.createElement('select');
        newElement.id = `character-option-${character.name}`;
        newElement.innerHTML = `${character.name}`;
        characterOptions.appendChild(newElement);
    }
}
