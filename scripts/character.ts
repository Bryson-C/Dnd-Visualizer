import {save, load} from "./save-data.js";

export const statShortHand = [ 'str', 'dex', 'con', 'wis', 'int', 'chr' ];

class Character {
    name = "";
    classType = "";
    stats: number[] = [];
    constructor(name, classType:string) {
        this.name = name;
        this.classType = classType;
        for (let i = 0; i < 6; i++)
            this.stats[i] = 0;
    }
}


let characters:Character[] = load('characters', []);
function saveCharacters() { save('characters', characters); }


export function CreateCharacter(name: string, classType: string) {
    characters.push(new Character(name, classType));
}
export function LoadCharactersAsOptions(elementID: string) {
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
