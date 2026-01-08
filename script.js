/* (word "the dead", "ancient to wake", "by a hand")
GROUP 1 — Original Prophecy
Secrets only the dead were meant to hear,
waiting for something ancient to wake,
drawn by a hand that wasn’t yours. 
*/

/* (word "the forgotten", "buried to rise", "by a shadow")
GROUP 2 — Revised Prophecy
Secrets only the forgotten were meant to hear,
waiting for something buried to rise,
drawn by a shadow that wasn’t yours.
*/

/* (word "the lost", "dormant to stir", "by a whisper")
GROUP 3 — Revised Prophecy
Secrets only the lost were meant to hear,
waiting for something dormant to stir,
drawn by a whisper that wasn’t yours.
*/

/* (word "the silent ones", "hidden to awaken", "by a presence")
GROUP 4 — Revised Prophecy
Secrets only the silent ones were meant to hear,
waiting for something hidden to awaken,
drawn by a presence that wasn’t yours.
*/

/* STEPS TO COMPLETE THE PROPHECY GENERATOR: 
1. Create a function that generates a random number up to a given number.
2. Create an object that contains three properties: entity, awakenings, and forces. Each property should be an array with at least four different strings.
3. Create an empty array prophecy.
4. Use a for...in loop to iterate over the properties of the object created in step 2.
5. Inside the loop, use the random number function to select a random string from each array in the object.
6. Use a switch statement to customize messages based on the property being accessed, and push these messages into the prophecy array.
7. Create a function called formatProphecy that takes the prophecy array as an argument, formats it into a readable string, and logs it to the console.
8. Call the formatProphecy function to display the generated prophecy   .
*/

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


// Is there another way to do this?
// Perhaps using array methods like map or forEach instead of for...in loop?