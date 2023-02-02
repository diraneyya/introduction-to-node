const cowsayObject = require("cowsay");

// Build in babysteps

const sayParameter = {
    text: 'Hello NPM!',
};

const cowsayOutput = cowsayObject.say(
    sayParameter);

console.log(cowsayOutput);

// Refactor, write the above in a more pro way

console.log(
    cowsayObject.say({
        text: 'Hello NPM!',
    })
);

// Write the above in a single line
//
// console.log(cowsayObject.say({text: 'Hello NPM!',}));