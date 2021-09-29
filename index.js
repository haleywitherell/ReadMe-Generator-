const inquirer = require('inquirer');
const fs = require('fs');

// ReadMe Questions
const readmeGenerator =(obj) => {
const licenses = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "MIT license": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}
const badge = licenses[obj.license]

    const structure = `# ${obj.title}

## Table of Contents 
[Description](#description)\n
[Installation Instructions](#installationInstructions)\n
[Usage Information](#usageInformation)\n
[License](#license)\n
[Contribution Guidelines](#contributionGuidelines)\n
[Test Instructions](#testInstructions)\n
[Questions](#questions)\n

## Description

See a short description of my project below.

${obj.description}

## Installation Instructions

${obj.installationInstructions}

## Usage Information

${obj.usageInformation}

## License

${badge}

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
        type: 'input',
        name: 'usageInformation',
        message: 'Insert project usage information.',
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Insert project contribution guidelines and information here.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your project licensing information.',
        choices: ["Apache License 2.0", "MIT license", "Mozilla Public License 2.0", "Unlicensed"]
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


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}