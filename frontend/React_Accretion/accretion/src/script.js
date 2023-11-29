console.log('entering script.js'); 

fetch('http://127.0.0.1:8000/api/sell')
    .then(response => response.json())
    .then(data => console.log(data));

console.log('leaving script.js');