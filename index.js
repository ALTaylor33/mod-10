const inquirer = require('inquirer');
const fs = require("fs");
const {Circle, Triangle, Square} = require('./lib/shapes');

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
        console.log(answers)
        let shapePage 
        if (answers.shape === "square"){
            shapePage = new Square()
        }else if(answers.shape === "circle"){
            shapePage = new Circle()
        }else if(answers.shape === "triangle"){
            shapePage = new Triangle()
        }
        console.log(shapePage)
        shapePage.setColor(answers.color)
        





//  fs.writeFile('mySvg.svg', svgString, (err) => {
//       if (err) throw err;
//       console.log('SVG image saved!');
//     });
    })