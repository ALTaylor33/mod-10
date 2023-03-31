const inquirer = require('inquirer');
const fs = require("fs");

const questions = [
  {
    type: 'list',
    message: 'What shape do you want?',
    name: 'shape',
    choices: [
      'square',
      'triangle',
      'circle',
    ],
  },
  {
    type: 'list',
    message: 'what color do you want the shape to be?',
    name: 'color',
    choices: [
      'red',
      'blue',
      'yellow',
    ],
  },
  {
    type: 'input',
    message: 'What text do you want in it',
    name: 'text',
  },
  {
    type: 'list',
    message: 'What color do you want your text?',
    name: 'textColor',
    choices: [
      'black',
      'white',
      'violet',
      'green',
      'orange'
    ],
  },
];

    inquirer.prompt(questions).then((answers) => {

        
    })