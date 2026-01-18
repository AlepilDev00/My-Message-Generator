generateRandomNumber = (num) => {
    // Gets number from 0 to num - 1
    return Math.floor(Math.random() * num);
};

const prophecyObject = {
    entity: ['the dead', 'the forgotten', 'the lost', 'the silent ones'],
    awakenings: [
        'ancient to wake',
        'buried to rise',
        'dormant to stir',
        'hidden to awaken',
    ],
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


function wrapText(text, width) {
    const words = text.split(' ');
    const lines = [];
    let current = '';

    for (const word of words) {
        if ((current + word).length > width) {
            lines.push(current.trim());
            current = word + ' ';
        } else {
            current += word + ' ';
        }
    }

    if (current.trim()) {
        lines.push(current.trim());
    }
    return lines;
}


formatProphecy = (prophecyArray) => {
    const maxWidth = 27;

    // Wrap each prophecy line into multiple lines
    const wrappedLines = prophecyArray.flatMap(line => wrapText(line, maxWidth));

    const formattedLines = wrappedLines
        .map(line => `              |   ${line.padEnd(maxWidth, ' ')} |  |`)
        .join('\n');

    const book = `
                 ________________________________
                /                               /|
               /                               / |
              /_______________________________/  |
              |                               |  |
${formattedLines}
              |                               |  |
              |_______________________________|  /
              /_______________________________/ /
              |                               |/
              |_______________________________|
    `;

    console.log(book);
};


formatProphecy(prophecy);
