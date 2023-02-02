const cowsayObject = require("cowsay");

// Build in babysteps

const sayParameter = {
    text: 'Hello NPM!',
};

const cowsayOutput = cowsayObject.say(
    sayParameter);

console.log(cowsayOutput);