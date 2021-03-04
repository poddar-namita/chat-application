//onclick event on button register
const registerVar = document.getElementById("register");
registerVar.addEventListener("click", () => {
    if (validateRegistration()) {
        document.forms[0].action = "./register.jsp";
        document.forms[0].method = "POST";
        document.forms[0].submit();
    }
    // validateRegistration();
});

//input validations
function validateRegistration() {
    //Variable declaration
    const nameVar = document.getElementById("reg-name").value;
    const emailVar = document.getElementById("reg-emailId").value;
    const passwordVar = document.getElementById("reg-password").value;
    const confirmPassVar = document.getElementById("reg-confirmPassword").value;

    if (nameVar === "") {
        alert("Name is required!");
        document.getElementById("reg-name").focus();
    } else if (emailVar === "") {
        alert("Email id is required!");
        document.getElementById("reg-emailId").focus();
    } else if (passwordVar === "") {
        alert("Password is required!");
        document.getElementById("reg-password").focus();
    } else if (confirmPassVar === "") {
        alert("Confirm Password is required!");
        document.getElementById("reg-confirmPassword").focus();
    } else if (passwordVar != confirmPassVar) {
        alert("Password doesn't match");
    } else {
        return true;
    }
}

//visibility of password
const showVar = document.getElementById("reg-showPassword");
const passwordVar = document.getElementById("reg-password");
const confirmPassVar = document.getElementById("reg-confirmPassword");
showVar.addEventListener("click", () => {
    if (showVar.checked == true) {
        console.log(passwordVar);
        passwordVar.type = "text";
        confirmPassVar.type = "text";
    } else {
        passwordVar.type = "password";
        confirmPassVar.type = "password";
    }
});
