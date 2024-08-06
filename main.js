import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\n\t WELCOME TO A.A BIRTHDAY MESSAGES GENERATOR\n\t"));
let message = await inquirer.prompt([
    {
        name: "message",
        type: "input",
        message: (chalk.cyanBright("\nENTER YOUR EMAIL ADDRESS FOR LOGGING IN :"))
    },
    {
        name: "message2",
        type: "input",
        message: (chalk.cyanBright("\nENTER YOUR PASSWORD :"))
    },
]);
console.log(chalk.yellowBright("CONGRATULATION! YOU LOGGED IN SUCCESSFULLY"));
let Birthday = await inquirer.prompt([
    {
        name: "message3",
        type: "input",
        message: (chalk.cyanBright("\nENTER A NAME OF THAT PERSON YOU WANT TO WISH : "))
    }
]);
console.log(chalk.yellowBright.bold(`\nHappy Birthday! ${Birthday.message3} 🎉 May this special day be filled with joy, laughter, and wonderful memories. Wishing you a year ahead full of new adventures, great success, and endless happiness. Enjoy your day to the fullest, surrounded by loved ones. Here's to another amazing year of life!\n `));
