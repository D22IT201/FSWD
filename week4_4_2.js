const fs = require('fs');

function checkFileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Error: File '${filePath}' does not exist.`);
    } else {
      console.log(`Success: File '${filePath}' exists.`);
    }
  });
}

// Example usage:
const filePath = '/d22it201/extra_file.txt';

checkFileExists(filePath);
