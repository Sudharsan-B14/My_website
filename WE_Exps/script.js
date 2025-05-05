function validateForm() { 
    let isValid = true;

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    if (name === "") {
    alert('Please enter your name'); 
    isValid = false;
    }

    if(address ==""){
        alert('please enter your address');
        isvalid = false;
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    
    if (!email.match(emailPattern)) {
        alert('Please enter your email'); 
        isValid = false;
    }
    
    if (password.length < 6) { 
        alert('Please enter your password'); 
        isValid = false;
    }
    
    const phonePattern = /^[0-9]{10}$/; 
    if (!phone.match(phonePattern)) {
        alert('Please enter your phone number');
        isValid = false;
    }

    return isValid;
}
    