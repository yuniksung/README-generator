// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description

  ${data.Description}

  # Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor](#Contributor)
  * [License](#License)
  * [Test](#Test)

  # Installation
  ${data.Installation}

  # Usage
  This application is used for: ${data.Usage}

  # License
  ${data.License}

  # Contributor
  Contributor: ${data.Contributor}
  Emain Address: ${data.Email}

  # Test
  To run the test, please put the following command in your terminal: ${data.Test}

  # Questions
  If you have any questions about the repo, open an issue or contact ${data.Contributor} directly ${data.Email}.

  [![Tutorial](capture.jpg)](https://www.youtube.com/watch?v=Lw-i2lfHGhE)

  `;
}

module.exports = generateMarkdown;

