document.querySelector('#btn').addEventListener('click', function(){
    let nameTooShort = false;
    let emailNotValid = false;

    let name = document.querySelector('#name').value;
    if(!name)
    {
        nameNotProvided = true;
    }
    else if (name.length < 3)
    {
        nameTooShort = true;
    }

    let email = document.querySelector('#email').value;

    if(email.includes('.') || email.includes('@')){
        emailNotValid = true;
    }
    

    if(nameNotProvided || nameTooShort || emailNotValid)
    {
        let errorDiv = document.querySelector('#errors');
        errorDiv.innerHTML = '';
        errorDiv.style.display = "block";

        if(nameNotProvided){
            errorDiv.innerHTML += `<p>Please provide your name</p>`;
        }

        if(nameTooShort){
            errorDiv.innerHTML += `<p>Your name is too short</p>`;
        }

        if(emailNotValid){
            errorDiv.innerHTML += `<p>Email not valid</p>`;
        }
    }
            console.log("name not provided =", nameNotProvided);
            console.log("name too short =", nameTooShort);
            console.log("email not valid =", emailNotValid);
})