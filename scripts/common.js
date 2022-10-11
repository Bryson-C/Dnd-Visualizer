

document.onload = console.log('Loaded Common Scripts!')

function getElem(identity) {

    let type = 0;
    if (identity[0] === '#') type = 1
    else if (identity[0] === '.') type = 2

    identity = identity.substring(1, identity.length)

    if (type === 1) return document.getElementById(identity)
    else if (type === 2) return document.getElementsByClassName(identity)
    return document.getElementById(identity)
}

function randomInt(max, min) {
    return Math.floor((Math.random() * max) + min)
}