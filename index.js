const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([
    {
    type:`input`,
    name: `username`,
    message:`What is your github username?`
    }, 
    {
        type:`input`,
        name:`email`,
        message:`Please enter your email.`
    },
    {   
    type: 'input',
    name: 'title',
    message: 'What is the title of your README?'
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
    {
    type: 'input',
    name: 'Tests',
    message: 'What tests have been done to ensure the quality of your work?'
    }, 
    {
    type:`input`,
    name: `questions`,
    message:`What is your github username?`
    }
    
]).then(function (response) {
    
    const licenses = {
        "MIT": `Copyright <2023> <[${response.username}](https://github.com/${response.username})> <br>
        \n
Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the “Software”), 
to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished to
do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software. 
        
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.` ,

"Apache":`Copyright <2023> <[${response.username}](https://github.com/${response.username})>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
        
http://www.apache.org/licenses/LICENSE-2.0
        
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    }



//! Because im using template literal it has to be written like this or it indents itself on the readme
    var readMeFile = `# ${response.title}
## Description <br>
${response.description} <br>
## Table of contents <br>
[Installation](#installation) <br>
[Usage](#usage) <br>
[License](#license) <br>
[Contribution Guidelines](#Contribution-Guidelines) <br>
[Questions](#questions) <br>

## Installation <br>
${response.installation} <br>
## Usage <br>
${response.usage} <br>
## License <br>
${licenses[response.license]} <br> 
## Contribution Guidelines <br> 
${response.contributions} <br>
## Questions <br> 
If you have any additional questions please feel free to contact me here ${response.email}`;









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