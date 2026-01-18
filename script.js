generateRandomNumber = (num) => {
    // Gets number from 0 to num - 1
    return Math.floor(Math.random() * num);
};

const prophecyObject = {
    entity: ['the dead', 'the forgotten', 'the lost', 'the silent ones'],
    awakenings: ['ancient to wake', 'buried to rise', 'dormant to stir', 'hidden to awaken'],
    forces: ['by a hand', 'by a shadow', 'by a whisper', 'by a presence'],
};

let prophecy = [];

for (let key in prophecyObject) {
    let randomIndex = generateRandomNumber(prophecyObject[key].length);
    let randomString = prophecyObject[key][randomIndex];

    switch (key) {
        case 'entity':
            prophecy.push(`Secrets only ${randomString} were meant to hear,`);
            break;
        case 'awakenings':
            prophecy.push(`waiting for something ${randomString},`);
            break;
        case 'forces':
            prophecy.push(`drawn ${randomString} that wasn't yours.`);
            break;
    }
}

formatProphecy = (prophecyArray) => {
    let formattedProphecy = prophecyArray.join('\n');
    console.log(formattedProphecy);
};

formatProphecy(prophecy);

