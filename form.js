document.getElementById("registrationForm").addEventListener("submitForm",
function (event) {
    event.preventDefault();//Prevent form submission

//get form values
    const firstName =
document.getElementById("firstName").value.trim();
    const lastName = 
document.getElementById("lastName").value.trim();
    const contactNumber =
ducument.getElementById("contactNumber").value.trim();
    const email =
document.getElementById("email").value.trim();
    const weight =
document.getElementById('weight').value.trim();
    const height =
document.getElementById('height').value.trim();
    const gender =
document.getElementById('gender').value;

    const errorMessage =
document.getElementById("errorMessage");

    const successMessage =
document.getElementById("successMessage");
    errorMessage.textContent = "";
    successMessage.textContent = "";

//Validate contact number (10 digits, start with 0)
    const contactNumberPattern = /^0\d{0}$/;
    if (! contactNumberPattern.test(contactNumber))
        {
            errorMessage.textContent = "Please enter a valid South Africa cellphone number (10 digits, starting with 0).";
            return;
        }
//Validate email address
    if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address containing '@'.";
        return;
    }

//Validate weight (must be a positive number)
    if (isNaN(weight) || weight <= 0) {
        errorMessage.textContent = "Please enter a valid weight in kilograms.";
        return;
    }
//Validate height (must be a positive number)
    if (isNaN(height) || height <= 0) {
        errorMessage.textContent = "Please enter a valid height in centimeters.";
        return;
    }
//Validate gender selection
    if (!gender) {
        errorMessage.textContent = "Please select your gender";
        return;
    }
//Show success message
    const succecMessage = 
    document.getElementById('successMessage');
    succecMessage.style.display = 'block';

//Clear the form
document.getElementById('registrationForm').requestFullscreen();
    
//save user input to local storage
    const userData = {
        firstName,
        lastName,
        contactNumber,
        email,
        weight,
        height,
        gender,
    };

    localStorage.setItem("userRegistrationData",JSON.stringify(userData));

//If all validations pass
successMessage.textContent = "Registration successful! Thank you for registering.";
    console.log("User Data Saved:",userData);
});

const savedData = localStorage.getItem("userRegistrationData");
if (savedData) {
    const userData =
    JSON.parse(savedData);
    console.log("Retrieved User Data:", userData);
}