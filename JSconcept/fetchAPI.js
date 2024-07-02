function fetchData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data');
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error('Failed to fetch data'));
    }
  };
  xhr.send();
}

function handleData(error, data) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
}

// Fetch data and handle it with the callback
fetchData(handleData);
