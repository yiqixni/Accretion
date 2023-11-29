document.getElementById('contact_form').addEventListener('submit', function(event) {
    
    event.preventDefault(); // prevent submitting default form

    const formData = {
        name: document.getElementById('contact_name').value, 
        email: document.getElementById('contact_email').value,
        message: document.getElementById('contact_message').value
    }
    console.log(formData); 

    // send data to the server 
    fetch ('/submit', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
    })

    // .then(response => response.text) 
}); 