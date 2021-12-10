const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateHTML = require('./src/generateHTML');

// highlight from chalk
const highlight = chalk.keyword('magenta');

// // dummy data
// const team = [
//   new Manager('Bob Ross', 'bross@gmail.com', 202, '16B'),
//   new Engineer('John Doe', 'jdoe@gmail.com', 333, 'jdoe'),
//   new Engineer('Jane Doe', 'jadoe@gmail.com', 334, 'jadoe'),
//   new Engineer('Collar White', 'cwhite@gmail.com', 337, 'ccwhite'),
//   new Intern('Miike Bolio', 'mbolio@gmail.com', 336, 'Miskatonic Uni'),
// ];

// write generated HTML to file
function writeFile(team) {
  const html = generateHTML(team);
  fs.writeFile('./dist/index.html', html, (err) => {
    if (err) console.log(err);
    else {
      console.log(
        `Page generated! Check out ${highlight(
          'index.html'
        )} in the dist directory!`
      );
    }
  });
}

// check if email address is valid
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) ? true : 'Enter a valid email address.';
}

// initialize empty team array
const team = [];

// prompt manager information
const promptManager = () => {
  console.log(`
  --------------------
    ${highlight('Add Team Manager')}
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Team Manager's name:",
        validate(name) {
          if (!name.trim()) {
            return 'Name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Team Manager's employee ID number:",
        validate(id) {
          if (!id.trim()) {
            return 'Employee ID is required.';
          } else if (isNaN(id)) {
            return 'Employee ID must be a number.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Team Manager's email address:",
        validate(email) {
          if (email.trim()) {
            return validateEmail(email.trim());
          } else if (!email.trim()) {
            return 'Email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'office',
        message: "Team Manager's office number:",
        validate(office) {
          if (!office.trim()) {
            return 'Office number is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'confirm',
        name: 'addEngineer',
        message: 'Next, add an Engineer to the team?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'addIntern',
        message: 'Add an Intern to the team?',
        default: true,
        when(answers) {
          // only jump to prompting intern if engineer is skipped
          return !answers.addEngineer;
        },
      },
    ])
    .then((answers) => {
      // destructure answers from inquirer
      const { name, id, email, office, addEngineer, addIntern } = answers;

      // instantiate a Manager object and push to team array
      const manager = new Manager(name, id, email, office);
      team.push(manager);

      // if adding engineer, prompt to add engineer, else prompt to add intern, else generate the HTML and write it to file
      if (addEngineer) {
        promptEngineer();
      } else if (addIntern) {
        promptIntern();
      } else {
        writeFile(team);
      }
    });
};

// prompt engineer information
const promptEngineer = () => {
  console.log(`
  --------------------
      ${highlight('Add Engineer')}
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Engineer's name:",
        validate(name) {
          if (!name.trim()) {
            return 'Name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Engineer's employee ID number:",
        validate(id) {
          if (!id.trim()) {
            return 'Employee ID is required.';
          } else if (isNaN(id)) {
            return 'Employee ID must be a number.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Engineer's email address:",
        validate(email) {
          if (email.trim()) {
            return validateEmail(email.trim());
          } else if (!email.trim()) {
            return 'Email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub username:",
        validate(github) {
          if (!github.trim()) {
            return 'GitHub username is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'confirm',
        name: 'addEngineer',
        message: 'Add another Engineer?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'addIntern',
        message: 'Add an Intern?',
        when(answers) {
          return !answers.addEngineer;
        },
      },
    ])
    .then((answers) => {
      const { name, id, email, github, addEngineer, addIntern } = answers;

      const engineer = new Engineer(name, id, email, github);
      team.push(engineer);

      // if adding another engineer, prompt engineer, else prompt intern, else generate HTML and write file
      if (addEngineer) {
        promptEngineer();
      } else if (addIntern) {
        promptIntern();
      } else {
        writeFile(team);
      }
    });
};

// prompt intern information
const promptIntern = () => {
  console.log(`
  --------------------
       ${highlight('Add Intern')}
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Intern's name:",
        validate(name) {
          if (!name.trim()) {
            return 'Name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Intern's employee ID number:",
        validate(id) {
          if (!id.trim()) {
            return 'Employee ID is required.';
          } else if (isNaN(id.trim())) {
            return 'Employee ID must be a number.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Intern's email address:",
        validate(email) {
          if (email.trim()) {
            return validateEmail(email.trim());
          } else if (!email.trim()) {
            return 'Email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "Intern's school:",
        validate(school) {
          if (!school.trim()) {
            return 'School is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'confirm',
        name: 'addIntern',
        message: 'Add another Intern?',
        default: false,
      },
    ])
    .then((answers) => {
      const { name, id, email, school, addIntern } = answers;

      const intern = new Intern(name, id, email, school);
      team.push(intern);

      // if adding another intern, prompt intern, else generate html and write file
      if (addIntern) {
        promptIntern();
      } else {
        writeFile(team);
      }
    });
};

// immediately invoke app initialization
(function init() {
  // welcome the user
  console.log(`
  Welcome to the ${highlight('Teammaker Page Generator')}!
  ------------------------------------------------------------------
  Enter data about each member of your development team to produce
  a quality webpage written in HTML and Tailwind CSS for use on your
  business's website! ${highlight('MAKE YOURSELVES KNOWN!')}`);

  // begin prompts, starting with the Team Manager
  promptManager();
})();
