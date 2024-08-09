const fs = require('fs');

// Read the users data from users.json file
fs.readFile('users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const users = JSON.parse(data);

  // Function to add fullName property to each user
  function addFullName(users) {
    return users.map(user => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`
    }));
  }

  // Get the transformed users
  const transformedUsers = addFullName(users);

  console.log('Transformed Users:', transformedUsers);
});
