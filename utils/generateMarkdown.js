
// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![${data.license}](https://img.shields.io/static/v1?label=license&message=${data.license}&color=${data.licenseColor})

## Description 

${data.desc}


## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)
* [Test](#test)


## Installation

${data.install}


## Usage 

${data.usage}

## Credits

${data.credits}


## License

${data.license}


## Questions

If you have any questions or want to reach me.

You can find me on Github here: [${data.github}](https://github.com/${data.github}?tab=repositories)

You can also reach me via email: ${data.email}

## Contributing

If you would like to contribute to this project please follow these guidelines

${data.contributors}

## Tests

${data.test}

`;
  
}

module.exports = generateMarkdown;
