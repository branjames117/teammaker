const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

describe('Employee', () => {
  it("returns the employee's name", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getName()).toBe('Bob Ross');
  });

  it("return's the employee's email", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getEmail()).toBe('bobross@gmail.com');
  });

  it("return's the employee's ID number", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getID()).toBe(any(Number));
  });
});

describe('Manager', () => {
  it("returns the manager's office number", () => {
    const manager = new Manager('Bob Ross', 'bobross@gmail.com', 123456, 'D12');
    expect(manager.getOfficeNumber()).toBe('D12');
  });
});

describe('Engineer', () => {
  it("returns the engineer's github profile", () => {
    const engineer = new Engineer(
      'Bob Ross',
      'bobross@gmail.com',
      123456,
      'bobross69'
    );
    expect(engineer.getGitHubProfile()).toBe('bobross69');
  });
});

describe('Intern', () => {
  it("returns the engineer's github profile", () => {
    const intern = new Intern(
      'Bob Ross',
      'bobross@gmail.com',
      123456,
      'Miskatonic University'
    );
    expect(intern.getSchool()).toBe('Miskatonic University');
  });
});

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
