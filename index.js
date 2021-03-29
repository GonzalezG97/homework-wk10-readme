// Getting my requirements 
const  inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

// These are the questions the user will be asked
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use. ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for others if they would like to contribute to this project',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Do you have any  test for your application?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license do you require?',
        name: 'license',
        choices: ['MIT', 'GPL 2', 'Apache', 'Bower','None'],
    },
    {
        type: 'list',
        message: 'What color do you want your badge to be?',
        name: 'licenseColor',
        choices: ['blue', 'red', 'green', 'yellow', 'orange'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: `If you have any credits please provide URL's to them`,
        name: 'credits',
    },
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// This function takes the user input and writes the file
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', genMarkdown({...answers}))
    })
    
}

// Function to initialize app
init();
