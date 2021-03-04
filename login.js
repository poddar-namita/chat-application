//onclick event on button login
const loginVar = document.getElementById("login");
loginVar.addEventListener("click", () => {
    if (validateLogin()) {
        document.forms[0].action = "./login.jsp";
        document.forms[0].method = "POST";
        document.forms[0].submit();
    }
});

//input validations
function validateLogin() {
    const emailVar = document.getElementById("emailId").value;
    const passwordVar = document.getElementById("password").value;
    console.log(emailVar);
    if (emailVar === "") {
        alert("Email id is required!");
        document.getElementById("emailId").focus();
    } else if (passwordVar === "") {
        alert("Password is required!");
        document.getElementById("password").focus();
    }
    return true;
}

//show password
const show = document.getElementById("showPassword");
const passwordVar = document.getElementById("password");
show.addEventListener("click", () => {
    if (show.checked == true) {
        passwordVar.type = "text";
    } else {
        passwordVar.type = "password";
    }
});
