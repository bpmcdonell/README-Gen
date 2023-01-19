// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter any installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter any contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }
];
const generateMarkdown = ({ title, description, install, usage, contribution, test, license, github, email }) =>
    `# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributing
${contribution}

## Tests
${test}

## Questions
You can find me on GitHub at ${github} or email me at ${email}`
    ;




// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return inquirer.prompt(questions);
    };
    promptUser()
        // TODO: Create a function to write README file
        .then((answers) => writeFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
