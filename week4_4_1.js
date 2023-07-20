const path = require('path');

function extractDirectoryAndBaseName(filePath) {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);
  console.log('Extracted Directory Name:', directoryName);
  console.log('Extracted Base Name:', baseName);
}

// Example usage:
const filePath = '/D22IT201/extra_file.txt';

extractDirectoryAndBaseName(filePath);
