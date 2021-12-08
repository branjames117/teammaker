const Employee = require('../lib/Employee');

describe('Employee', () => {
  it("returns the employee's name", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getName()).toBe('Bob Ross');
  });

  it("returns the employee's email", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getEmail()).toBe('bobross@gmail.com');
  });

  it("returns the employee's ID number", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getID()).toEqual(expect.any(Number));
  });

  it("returns the employee's role", () => {
    const employee = new Employee('Bob Ross', 'bobross@gmail.com', 123456);
    expect(employee.getRole()).toBe('Employee');
  });
});
