const path = require('path');
function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);
  console.log('Extracted File Extension:', fileExtension);
}

// Example usage:
const filePath = '/week4_1_1.js';

extractFileExtension(filePath);
