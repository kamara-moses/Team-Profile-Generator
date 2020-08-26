// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super (name, id, email)
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.title;
    }
}

module.exports = Manager;