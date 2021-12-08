const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it("returns the engineer's github profile", () => {
    const engineer = new Engineer(
      'Bob Ross',
      'bobross@gmail.com',
      123456,
      'bobross69'
    );
    expect(engineer.getGitHub()).toBe('bobross69');
  });

  it("returns the employee's role", () => {
    const engineer = new Engineer(
      'Bob Ross',
      'bobross@gmail.com',
      123456,
      'bobross69'
    );
    expect(engineer.getRole()).toBe('Engineer');
  });
});
