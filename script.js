document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signIn");
    const signUpForm = document.getElementById("signUp");
    const signUpButton = document.getElementById("signUpButton");
    const signInButton = document.getElementById("signInButton");

    if (signUpButton && signInButton && signInForm && signUpForm) {
       
        signUpButton.addEventListener("click", function () {
            console.log("Sign Up Button Clicked!"); 
            signInForm.style.display = "none"; 
            signUpForm.style.display = "block"; 
        });

       
        signInButton.addEventListener("click", function () {
            console.log("Sign In Button Clicked!"); 
            signUpForm.style.display = "none"; 
            signInForm.style.display = "block"; 
        });
    } else {
        console.error("One or more elements not found. Check your HTML IDs.");
    }
});
