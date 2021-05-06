const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require ("path");
const fs = require ("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "rendered.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const emptyId = [];

const questionsEmployee = [
    {
        type: "input",
        name: "nameManager",
        message: "state manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "enter manager's ID?"
    },
    {
        type: "input",
        name: "emailManager",
        message: "provide manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "enter manager's office number?"
    }
];

function manager() {
    console.log("Let's construct your team");
    inquirer.prompt(questionsEmployee).then(function(data){
        const manager = new Manager(data.nameManager, data.managerId, data.emailManager, data.officeNumber);
        teamMembers.push(manager);
        emptyId.push(data.managerId);
        team();
    });
}; 
function team() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Select the type of member to add",
            choices: [
                "Engineer",
                "Intern",
                "do not add any more team members"
            ]
        }
    ]).then(function(data){
        if (data.memberChoice === "Engineer"){
            engineer();
        } else if (data.memberChoice === "Intern"){
            intern();
        } else (outputTeam());
    });
};

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name:"engineerName",
            message: "Enter the engineer's name?"
        },
        {
            type: "input",
            name:"engineerId",
            message: "Enter the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "enter engineer's GitHub username?"
        }
    ]). then(function(data){
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamMembers.push(engineer);
        emptyId.push(data.engineerId);
        team();
    });
};

function intern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the intern's school?"
        }
    ]). then(function(data){
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamMembers.push(intern);
        emptyId.push(data.internId);
        team();
    });
};

function outputTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

manager();