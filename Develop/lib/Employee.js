// TODO: Write code to define and export the Employee class
// const Employee = require("./employee.js")


class Employee {
    constructor(name, id, email) {

    this.name = name;
    this.id = id;
    this.email = email;

    }

    getName (){
        return this.name;
    };
    getId() {
       return this.id;
    };
    getEmail() {
        return this.email;
    };
    
}
    module.exports = Employee

   