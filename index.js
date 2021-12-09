const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// dummy data
const team = [
  new Manager('Bob Ross', 'bross@gmail.com', 202, '16B'),
  new Engineer('John Doe', 'jdoe@gmail.com', 333, 'jdoe'),
  new Engineer('Jane Doe', 'jadoe@gmail.com', 334, 'jadoe'),
  new Engineer('Collar White', 'cwhite@gmail.com', 337, 'ccwhite'),
  new Intern('Miike Bolio', 'mbolio@gmail.com', 336, 'Miskatonic Uni'),
];

console.log(generateHTML(team));
