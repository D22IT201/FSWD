const fs = require('fs');

fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim().split('\n');
  const matchingStudents = [];

  lines.forEach((line) => {
    const [name, cgpa] = line.split(' ');

    // Check if the name contains 'MA' and CGPA is greater than 7
    if (name.includes('MA') && parseFloat(cgpa) > 7.0) {
      matchingStudents.push(name);
    }
  });

  // Print the matching students
  if (matchingStudents.length > 0) {
    console.log('Students matching the criteria:');
    matchingStudents.forEach((student) => {
      console.log(student);
    });
  } else {
    console.log('No students found matching the criteria.');
  }
});
