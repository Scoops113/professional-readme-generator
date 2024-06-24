function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `- [License](#license)\n`;
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License\nThis project is licensed under the ${license} license.\n`;
}

function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;
  
  
  markdown += renderLicenseBadge(data.license) + '\n\n';

  markdown += `## Description\n${data.description}\n\n`;

  
  let tableOfContents = `## Table of Contents\n`;
  tableOfContents += `- [Description](#description)\n`;
  if (data.installation) {
    tableOfContents += `- [Installation](#installation)\n`;
  }
  if (data.usage) {
    tableOfContents += `- [Usage](#usage)\n`;
  }
  if (data.contributing) {
    tableOfContents += `- [Contributing](#contributing)\n`;
  }
  if (data.tests) {
    tableOfContents += `- [Tests](#tests)\n`;
  }
  tableOfContents += renderLicenseLink(data.license);
  tableOfContents += `- [Questions](#questions)\n\n`;

  markdown += tableOfContents;

 
  if (data.installation) {
    markdown += `## Installation\n${data.installation}\n\n`;
  }
  if (data.usage) {
    markdown += `## Usage\n${data.usage}\n\n`;
  }
  if (data.contributing) {
    markdown += `## Contributing\n${data.contributing}\n\n`;
  }
  if (data.tests) {
    markdown += `## Tests\n${data.tests}\n\n`;
  }

 
  markdown += `## Questions\n`;
  markdown += `For questions or support, please contact [${data.username}](https://github.com/${data.username}) at ${data.email}.\n\n`;

  
  markdown += renderLicenseSection(data.license);

  return markdown;
}

module.exports = generateMarkdown;


