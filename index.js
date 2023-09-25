const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([{   
    type: 'input',
    name: 'title',
    message: 'What is the name of your README?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Describe your README'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'How do you install your program?'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?'
    },
    {
    type: 'list',
    name: 'license',
    message: 'What license would you like your README to contain?',
    choices: ["MIT","GPLv2","Apache","GPLv3","No license"],
    },
    {        
    type: 'input',
    name: 'contributions',
    message: 'Enter if and how you would like people to contribute to this project.',
    },
]).then(function (response) {
    
    var readMeFile = `# Title`









    fs.writeFile("READMOI.MD",readMeFile, function(err){
        if (err) throw err;
        console.log("saved");
    })

    
    
})

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README