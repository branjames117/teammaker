class Employee {
  constructor(name, email, id) {
    this.name = name.trim();
    this.email = email.trim();
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getID() {
    return this.id;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
