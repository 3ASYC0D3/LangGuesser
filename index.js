const franc = require('franc');

const arg = process.argv[2];


if (franc(arg) === "und") {
    console.log('Sentence is too short. Pls pass a longer sentence to detect the language.');
} 
else {
    console.log(franc(arg));
};
