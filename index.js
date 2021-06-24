const franc = require('franc');
const langs = require("langs");

const arg = process.argv[2];


if (franc(arg) === "und") {
    console.log('Sentence is too short. Pls pass a longer sentence to detect the language.');
}
else {
    console.log(langs.where('3', franc(arg)).name);
};
