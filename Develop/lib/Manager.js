// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    // calling the parent constructor
    
  }
  getOfficeNumber() {
      return this.officeNumber;
  }
  getRole() {
      return "Manager";
  }
}

module.exports = Manager;