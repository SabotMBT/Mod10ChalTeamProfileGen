const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const EngArray = [];
const IntArray = [];
const ManArray = [];

async function newEmployee() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employee's position?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => promptSelector(response));
}

function promptSelector(result) {
  if (result.role === "Manager") {
    addManager();
  } else if (result.role === "Engineer") {
    addEngineer();
  } else {
    addIntern();
  }
}

async function addManager() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is this manager's Office Number?",
      },
    ])
    .then((response) => newMan(response));
}

async function addEngineer() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is this engineer's GitHub user name?",
      },
    ])
    .then((response) => newEng(response));
}

async function addIntern() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did this intern attend?",
      },
    ])
    .then((response) => newInt(response));
}

function newMan(v) {
  const Man = new Manager(v.name, v.id, v.email, v.officeNumber);
  console.log(Man);
  ManArray.push(Man);
  another();
}

function newEng(v) {
  const Eng = new Engineer(v.name, v.id, v.email, v.github);
  console.log(Eng);
  EngArray.push(Eng);
  another();
}

function newInt(v) {
  const Int = new Intern(v.name, v.id, v.email, v.school);
  console.log(Int);
  IntArray.push(Int);
  another();
}

async function another() {
  await inquirer
    .prompt([
      {
        type: "confirm",
        name: "bin",
        message: "Add another employee?",
      },
    ])
    .then((response) => checkIf(response));
}

function checkIf(x) {
  if (x.bin === true) {
    newEmployee();
  } else {
    console.log(ManArray);
    console.log(EngArray);
    console.log(IntArray);
    return;
  }
}

newEmployee();
