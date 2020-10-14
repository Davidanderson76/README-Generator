//functions to render the licenses

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## TABLE OF CONTENTS
  * [Installation] (#installation)
  * [Usage] (#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  ## INSTALLATION

  To install all the necessary dependencies, run the following command:
  ${data.installation}

  ## USAGE

  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## CONTRIBUTING
  ${data.contributing}

  ## TESTS

  To run tests, run the following command:
  ${data.test}

  ## QUESTIONS

  If you have any questions about this repo, contact me directly at ${data.email}!

  More of my work is available at [${data.github}](https://github.com/${data.github}/)!

`;
}

module.exports = generateMarkdown;
