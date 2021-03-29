
// TODO: Create a function to generate markdown for README
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


## Installation

${data.install}


## Usage 

${data.usage}

## Credits

${data.credits}


## License

${data.license}


## Questions

You can find me on Github here: [${data.github}](https://github.com/${data.github}?tab=repositories)

You can also reach me via email: ${data.email}

## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

${data.test}

`;
  
}

module.exports = generateMarkdown;
