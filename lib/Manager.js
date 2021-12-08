const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, email, id, office) {
    super(name, email, id);
    this.office = office;
  }

  getOfficeNumber() {
    return this.office;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
