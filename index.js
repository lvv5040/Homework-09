const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./generateMarkDown");

// function formating(answers) {
// var results = "";

// console.log("formating function", answers)

// results = results.concat("# " + answers.title) 
// results = results.concat("\n")
// results = results.concat("# " + answers.description)
// console.log(results)
// results = results.concat("# " + answers.tableOfContents) 
// results = results.concat("\n")
// results = results.concat("# " + answers.installation) 
// results = results.concat("\n")
// results = results.concat("# " + answers.usage) 
// results = results.concat("\n")
// results = results.concat("# " + answers.license) 
// results = results.concat("\n")
// results = results.concat("# " + answers.contributing) 
// results = results.concat("\n")
// results = results.concat("# " + answers.tests) 
// results = results.concat("\n")
// results = results.concat("# " + answers.questions) 
// results = results.concat("\n")

// return results
// }

function start() {

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What would you title your ReadMe?"
      },
      {
        type: 'input',
        name: 'description',
        message: "What is your description for your ReadMe?"
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: "What are the table of contents for your ReadMe?"
      },
      {
        type: 'input',
        name: 'installation',
        message: "What is the installation of your ReadMe?"
      },
      {
        type: 'input',
        name: 'usage',
        message: "What is the use of your ReadMe?"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: 'input',
        name: 'contributing',
        message: "What is contributing to your ReadMe?"
      },
      {
        type: 'input',
        name: 'tests',
        message: "What tests are there for your ReadMe?"
      },
      {
        type: 'input',
        name: 'questions',
        message: "What questions are in your ReadMe?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your github?"
      }
  ])
  .then(answers => {
    //console.log(JSON.stringify(answers))

    //let blah = formating(answers)

    console.log("Loading new ReadMe ...");

    // fs.writeFile('README.md', blah, function (err) {
    //   if (err) return console.log(err);
    //   console.log('README.md');
    // });

    console.log("answers: ",answers);

    //where are we writing
    const filePath = path.join(process.cwd(),"README.md");
    //what are we writing
    const data = generateMarkdown(answers);

    console.log("data: ",data);

    fs.writeFileSync(filePath,data);
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log("something went wrong")
    } else {
      console.log("something went wrong")
    }
  });

}

start();