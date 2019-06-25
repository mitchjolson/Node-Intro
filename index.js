const characters = [
    {
        name: "Spike",
        show: "Cowboy Bebop",
    },
    {
        name: "L",
        show: "Death Note"
    },
    {
        name: "Goku",
        show: "Dragonball Z"
    },
    {
        name: "Gon",
        show: "Hunter X Hunter"
    }
]

for( character of characters ){
    console.log(`${character.name} is a character in the show ${character.show}.`);
}