const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdow = require("./src/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?",
        validate: nameInput => {
          if (nameInput) {
          return true;
          } else {
              console.log('Please enter your username!');
              return false;
          }
      }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: nameInput => {
          if (nameInput) {
          return true;
          } else {
              console.log('Please enter your email address!');
              return false;
          }
      }
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title for your project?",
      },
      {
        type: "input",
        name: "Description",
        message: "Please give description of your project.",
      },
      {
        type: "input",
        name: "Installation",
        message: "What necessary dependencies must be installed to run this app?",
      },
      {
        type: "input",
        name: "Usage",
        message: "What is this app used for?",
      },
      {
        type: "input",
        name: "License",
        message: "What license was used for this README?",
      },
      {
        type: "input",
        name: "Contributor",
        message: "Please add contributors",
      },
      {
        type: "input",
        name: "Test",
        message: "What command do you use to test this App?",
      }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdow(data), (err) => {
    console.log(fileName + " generated");
    if (err) {
      throw err;
    }
    
  })
};

// function to initialize program
const init = () => inquirer.prompt(questions)  

// function call to initialize program
init()
.then((data) => writeToFile("./dist/README.md", data))
.then(() => console.log("Success!"))
.catch((err) => console.log(err));