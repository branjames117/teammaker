const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// // dummy data
// const team = [
//   new Manager('Bob Ross', 'bross@gmail.com', 202, '16B'),
//   new Engineer('John Doe', 'jdoe@gmail.com', 333, 'jdoe'),
//   new Engineer('Jane Doe', 'jadoe@gmail.com', 334, 'jadoe'),
//   new Engineer('Collar White', 'cwhite@gmail.com', 337, 'ccwhite'),
//   new Intern('Miike Bolio', 'mbolio@gmail.com', 336, 'Miskatonic Uni'),
// ];

// write generated HTML to file
function writeToFile(dest, src) {
  fs.writeFile(dest, src, (err) => {
    if (err) console.log(err);
    else {
      console.log(
        'Page generated! Check out index.html in the dist directory!'
      );
    }
  });
}

// initialize empty team array
const team = [];

// prompt manager information
const promptManager = () => {
  console.log(`
  --------------------
    Add Team Manager
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Team Manager?',
        validate(name) {
          if (!name) {
            return 'Team Manager name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Team Manager's employee ID number?",
        validate(id) {
          if (!id) {
            return 'Team Manager ID is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Team Manager's email address?",
        validate(email) {
          if (!email) {
            return 'Team Manager email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the Team Manager's office number?",
        validate(office) {
          if (!office) {
            return 'Team Manager office number is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'confirm',
        name: 'addEngineer',
        message: 'Add an Engineer to the team?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'addIntern',
        message: 'Add an Intern to the team?',
        default: true,
        when(answers) {
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
        const html = generateHTML(team);
        writeToFile('./dist/index.html', html);
      }
    });
};

// prompt engineer information
const promptEngineer = () => {
  console.log(`
  --------------------
      Add Engineer
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer?',
        validate(name) {
          if (!name) {
            return 'Engineer name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's employee ID number?",
        validate(id) {
          if (!id) {
            return 'Engineer ID is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?",
        validate(email) {
          if (!email) {
            return 'Engineer email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's GitHub username?",
        validate(github) {
          if (!github) {
            return 'Engineer GitHub username is required.';
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
        const html = generateHTML(team);
        writeToFile('./dist/index.html', html);
      }
    });
};

// prompt intern information
const promptIntern = () => {
  console.log(`
  --------------------
       Add Intern
  --------------------
`);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Intern?',
        validate(name) {
          if (!name) {
            return 'Intern name is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Intern's employee ID number?",
        validate(id) {
          if (!id) {
            return 'Intern ID is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?",
        validate(email) {
          if (!email) {
            return 'Intern email address is required.';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the name of the Intern's school?",
        validate(school) {
          if (!school) {
            return 'Intern school is required.';
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
        const html = generateHTML(team);
        writeToFile('./dist/index.html', html);
      }
    });
};

// immediately invoke app initialization
(function init() {
  // welcome the user
  console.log(`
  Welcome to the Teammaker Page Generator!
  ------------------------------------------------------------------
  Enter data about each member of your development team to produce
  a quality webpage written in HTML and Tailwind CSS for use on your
  business's website! MAKE YOURSELVES KNOWN!`);

  // begin manager prompt
  promptManager();
})();
