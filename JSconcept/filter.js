const fs = require('fs');

// Read the users data from users.json file
fs.readFile('users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const users = JSON.parse(data);

  // Function to filter users by age
  function filterUsersByAge(users, ageLimit) {
    return users.filter(user => user.age <= ageLimit);
  }

  // Define the age limit
  const ageLimit = 30;

  // Get the filtered users
  const filteredUsers = filterUsersByAge(users, ageLimit);

  // Print the filtered users
  console.log('Filtered Users:', filteredUsers);
});
