const inquirer = require('inquirer');
const fs = require('fs');

// ReadMe Questions
const readmeGenerator =(obj) => {
    const structure = `# ${obj.title}

## Table of Contents 
[Description](#description)\n
[Installation Instructions](#installationInstructions)\n
[Usage Information](#usageInformation)\n
[Contribution Guidelines](#contributionGuidelines)\n
[Test Instructions](#testInstructions)\n
[Questions](#questions)\n

## Description

This is a short description for this project

${obj.description}

## Installation Instructions

${obj.installationInstructions}

## Usage Information

${obj.usageInformation}

## Contribution Guidelines

${obj.contributionGuidelines}

## Test Instructions

${obj.testInstructions}

## Questions

Feel free to contact me with any questions. See my contact info below.

${obj.questions}` 

    // fs.writeFile("README.md", structure, (err) => {
    //     if(err) throw err;
    // })

    fs.writeFileSync("README.md", structure)
}

const promptUser = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'Insert project installation instructions.',
      },
      {
        type: 'list',
        name: 'usageInformation',
        message: 'Insert project usage information.',
        choices: ["commercial", "enterprise", "clown college"]
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Insert project contribution guidelines and information here.',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Insert project information on running tests here.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address and GitHub URL link here.',
      },
    ]).then(response => {
        console.log(response)
        readmeGenerator(response)
    })
  };

promptUser()
// console.log(resultObj)