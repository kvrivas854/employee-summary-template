const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
employeeRole();

//separates questionnaire dependent on role within company
function employeeRole() {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        choices: ['Intern', 'Engineer', 'Manager', 'Done'],
        message: "Please choose one of the following: ",
    }])
        .then(function (answers) {
            if (answers.choice === "Intern") {
                internSurvey();
            }
            if (answers.choice === "Engineer") {
                engSurvey();
            }
            if (answers.choice === "Manager") {
                manSurvey();
            }
            if (answers.choice === "Done") {
                createHTMLFile();
            }
        })
}
// built similar prompts that are dependent on job role, pushes all answers to empty employee array
function internSurvey() {
    // prompts user for intern specific info: name, id, email, and school
     inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School/College)?",
            name: "Property"
        },
    ]).then (function (internAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(internAnswers);

        // created new parameter to store information gathered from prompts, pushing information to empty employees array
        const intern = new Intern (internAnswers.Name, internAnswers.ID, internAnswers.Email, internAnswers.Property)
        console.log(intern);
        employees.push(intern);
        console.log(employees);
        
        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeRole();
    })
};

// built similar prompts that are dependent on job role, pushes all answers to empty employee array
function engSurvey() {
    // prompts user for engineer specific info: name, id, email, and github
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (GitHub Link)?",
            name: "Property"
        },
    ]).then (function (engAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(engAnswers);

        // created new parameter to store information gathered from prompts, pushing information to empty employees array
        const engineer = new Engineer (engAnswers.Name, engAnswers.ID, engAnswers.Email, engAnswers.Property)
        console.log(engineer);
        employees.push(engineer);
        console.log(employees);

        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeRole();
    })
};

// built similar prompts that are dependent on job role, pushes all answers to empty employee array
function manSurvey() {
    //prompts for manager specific info: name, id, email, office number
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (Office Number)?",
            name: "Property"
        },
    ]).then (function (manAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(manAnswers);

        // created new parameter to store information gathered from prompts, pushing information to empty employees array
        const manager = new Manager (manAnswers.Name, manAnswers.ID, manAnswers.Email, manAnswers.Property)
        console.log(manager);
        employees.push(manager);
        console.log(employees);

        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeRole();
    })
};

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

function createHTMLFile(){

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    
    fs.writeFileSync(outputPath, render(employees), "utf-8")

};
