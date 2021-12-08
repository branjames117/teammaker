const Manager = require('../lib/Manager');

describe('Manager', () => {
  it("returns the manager's office number", () => {
    const manager = new Manager('Bob Ross', 'bobross@gmail.com', 123456, 'D12');
    expect(manager.getOfficeNumber()).toBe('D12');
  });

  it("returns the employee's role", () => {
    const manager = new Manager('Bob Ross', 'bobross@gmail.com', 123456, 'D12');
    expect(manager.getRole()).toBe('Manager');
  });
});
