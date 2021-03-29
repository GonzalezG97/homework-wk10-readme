// TODO: Include packages needed for this application
const  inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
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
        message: 'Do you have any guidelines for future contributors to follow?',
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
        choices: ['MIT', 'GPL 2', 'Apache', '','None'],
    },
    {
        type: 'list',
        message: 'What color do you want your badge to be?',
        name: 'licenseColor',
        choices: ['Blue', 'Red', 'Green', 'Yellow', 'Orange'],
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', genMarkdown({...answers}))
    })
    
}

// Function call to initialize app
init();
