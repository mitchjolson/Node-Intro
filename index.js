const moduleStuff = require('./anime.module');
const characterList = moduleStuff.characters;


for( character of characterList ){
    console.log(`${character.name} is a character in the show ${character.show}.`);
}

moduleStuff.hello('Playfair');