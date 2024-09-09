var catButton = document.getElementById("get-cat");
var catPic = document.getElementById("cat-pic");

catButton.onclick = function() { //here we are using the button to fetch api using the Fetch api method
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            catPic.src = data[0].url;
        });
}

var form = document.getElementById("signup");
form.onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;                  /*here we are using the methods thst we use in the DOM to fetch elements from a tree */
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    var isValid = true;

    if (name == "") {
        nameError.textContent = "Please enter a name";                        //validating the form inputs which we have assigned in the form fields
        isValid = false;
    }

    if (email == "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Sign up successful!");
        form.reset();
    }
}