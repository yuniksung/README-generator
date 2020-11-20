// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  # Description

  ${data.Description}

  #Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor](#Contributor)
  * [License](#License)
  * [Test](#Test)

  # Installation
  ${data.Installation}

  # Usage
  This application is used for: ${data.Usage}

  # Contributor
  Contributor: ${data.Contributor}

  # License
  ${data.License}

  # Test
  To run the test, please put the following command in your terminal: ${data.Test}

  ## Questions
  If you have any questions or issues, please contact me at ${data.email}. You can find more information of my work at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;

