const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
//here is where all the saved data gets placed into the readme md file
const generateMarkDown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license will your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be used to install the dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should run to preform a test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about this repo?",
    },
    {
        input: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating a perfect READEME just for you...");
        writeToFile("README.md", generateMarkDown({...inquirerResponses}));
    })

}

// function call to initialize program here
init();
