// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // calling the parent constructor
    
  }
  getSchool() {
      return this.school;
  }
  getRole() {
      return "Intern";
  }
}

module.exports = Intern;