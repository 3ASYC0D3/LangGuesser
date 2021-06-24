const franc = require('franc');
const langs = require("langs");
const colors = require('colors');

const arg = process.argv[2];


if (franc(arg) === "und") {
    console.log('Sentence is too short. Pls pass a longer sentence to detect the language.'.red);
}
else {
    console.log(`Our best guess is: ${langs.where('3', franc(arg)).name.green}`);
};
