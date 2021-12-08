const Intern = require('../lib/Intern');

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

  it("returns the employee's role", () => {
    const intern = new Intern(
      'Bob Ross',
      'bobross@gmail.com',
      123456,
      'Miskatonic University'
    );
    expect(intern.getRole()).toBe('Intern');
  });
});
