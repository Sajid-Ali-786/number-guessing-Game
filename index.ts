#! /user/bin/env node


import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([{

    name: "userGuessedNumber",
    type: "number",
    message: "pleaseguessNumber between 1-6"
},
]);

if(answers.userGuessedNumber === randomNumber){
    
console.log("Congratulations you guessed right number.")

}else{console.log("you guessed wrong number")

}

console.log("THE END");

