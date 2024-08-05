function getUser(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: 'John Doe' });
      }, 1000);
    });
  }
  
  function getPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Post 1', 'Post 2', 'Post 3']);
      }, 1000);
    });
  }
  
  getUser(1)
    .then((user) => {
      console.log(user); // Output: { id: 1, name: 'John Doe' }
      return getPosts(user.id);
    })
    .then((posts) => {
      console.log(posts); // Output: ['Post 1', 'Post 2', 'Post 3']
    })
    .catch((error) => {
      console.error(error);
    });
  