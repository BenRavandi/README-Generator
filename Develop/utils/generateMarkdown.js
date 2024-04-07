// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GPL 3.0':
      return `[GNU AGPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Apache 2.0':
      return `[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[MIT license](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  const { title, description, installation, usage, contribution, test, license, githubUsername, email } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `
  
  # ${title}

  ${licenseBadge}

  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  

  ## Installation
  ${installation}

  ## Usage
   ${usage}

  ## License
  ${licenseSection}

  ## Contribution
  ${contribution ? contribution : 'Contributions are not accepted at the moment'}

  ## Test
  ${test}

  ## Questions
  - GitHub: [${githubUsername}](https://github.com/${githubUsername})
  - Email: ${email}
    `;
}

module.exports = generateMarkdown;