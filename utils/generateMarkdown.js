function renderLicenseBadge(license) {
  var badge;
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GPL':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    default:
      badge = '';
  }
  return badge;
}

//Function that creates the license link based on selected license
function renderLicenseLink(license) {
  var selectedLicense;
  switch (license) {
    case 'MIT':
      selectedLicense = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      selectedLicense = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      selectedLicense = '(https://opensource.org/licenses/ISC)';
      break;
    case 'BSD':
      selectedLicense = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;

    default:
      selectedLicense = '';
  }
  return selectedLicense;
}

// Function that creates the license note to add under 'License' section based on selected license
function renderLicenseSection(license) {
  var licenseNote;
  switch (license) {
    case 'MIT':
      licenseNote = 'This application is under the MIT License';
      break;
    case 'Apache':
      licenseNote = 'This application is under the Apache License';
      break;
    case 'GPL':
      licenseNote = 'This application is under the GPL License';
      break;
    case 'BSD':
      licenseNote = 'This application is under the BSD License';
      break;
    default:
      licenseNote = '';
  }
  return licenseNote;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};

