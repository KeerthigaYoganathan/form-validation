//get first name
const firstName = document.getElementById("first-name");

//Get first name error message element
const firstNameError = document.getElementById("first-name-error");

//get submit button
const submitButton = document.getElementsByClassName("submit-btn")[0];

//get email id
const emailId = document.getElementById("email-id");

//get email error message
const emailErrorMsg = document.getElementById("email-error");

//get gender
const genderErrorMsg = document.getElementById("gender-error");

//get phone number
const phoneNumber = document.getElementById("phone-number");

//get password
const pwd = document.getElementById("password");

//get confirm password
const confirmPwd = document.getElementById("con-password");

let pwdValue;
let regexPassword;
let genderCheck = false;
let formCheck = 0;



//event listenet to clear the error message when input is detected
// firstName.addEventListener("input", function () {
//     firstNameError.innerText = ""; // Clear the error message
//   });

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    validateFirstName();
    validateEmailId();
    validateGender();
    validatePhoneNumber();
    validatePassword();
    // validateConfirmPassword()
    validation();
    
})

function validation(){
    console.log("hi");
    if(validateFirstName(true) && genderCheck && validateEmailId(true) && validatePhoneNumber(true) && validatePassword(true) && validateConfirmPassword(true)){
        console.log("helo");
        alert("Successful");
    }
    // console.log(formCheck);
    // if(formCheck >= 0){
    //     alert("Successful");
    // }
}


function validateFirstName(){
    //Get first name value
    
    const firstNameValue = firstName.value;
    // console.log(firstNameValue); 

    //check first name is empty
    if(firstNameValue.trim() == ""){
        firstNameError.innerText = "Please enter your first name";
        firstName.nextElementSibling.style.display = "block";
        formCheck --;
        return false;
    }
    else if(firstNameValue.length <3 || firstNameValue.length > 20){
        firstNameError.innerText = "First name should be between 3 and 20 characters";
        firstName.nextElementSibling.style.display = "block";
        formCheck --;
        return false;
    }
    else{
        // firstNameError.innerText = "";
        firstName.nextElementSibling.style.display = "none";
        formCheck ++;
        return true;
    }
    
}

function validateGender(){
    const genderArr = document.getElementsByName("gender");
    // let flag;
    for(let i=0; i<genderArr.length; i++){
        if(genderArr[i].checked){
            // console.log(genderArr[i].value);
            // flag = true;
            // console.log(genderArr[i].parentElement.children[7]);
            genderArr[i].parentElement.children[7].style.display = "none";
            genderCheck = true;
            formCheck ++;
            console.log(formCheck, "genderCheck");
            break;
            
            
            
        }
        else{
            // flag = false;
            genderArr[i].parentElement.children[7].style.display = "block";
            genderCheck = false;
            formCheck --;
            console.log(formCheck, "genderCheck");
        }
    }
    // console.log(flag);

}

function validateEmailId(){
    const emailIdValue = emailId.value.trim();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(regexEmail.test(emailIdValue)){
        // console.log(emailId.nextElementSibling);
        emailId.nextElementSibling.style.display = "none";
        formCheck ++;
        return true;
    }
    else{
        // console.log("not working");
        emailId.nextElementSibling.style.display = "block";
        formCheck --;
        return false;

    }


}
function validatePhoneNumber(){

    const phoneNumberValue = phoneNumber.value.trim();
    const regexPhone = /^\d{10}$/;
    // console.log(phoneNumberValue);
    if (regexPhone.test(phoneNumberValue)){
        // console.log("hi");
        phoneNumber.nextElementSibling.style.display = "none";
        formCheck ++;
        return true;
    }
    else{
        phoneNumber.nextElementSibling.style.display = "block";
        formCheck --;
        return false;
    }

}

function validatePassword(){
    // console.log("hi");
    pwdValue = pwd.value.trim();
    // console.log(pwdValue);
    regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,10}$/;
    if(regexPassword.test(pwdValue)){
        pwd.nextElementSibling.style.display = "none";
        formCheck ++;
        return true;
    }
    else{
        pwd.nextElementSibling.style.display = "block";
        formCheck --;
        return false;
    }
}


function validateConfirmPassword(){
    const confirmPwdValue = confirmPwd.value.trim();
    pwdValue = pwd.value.trim();
    // console.log(pwdValue);
    if(confirmPwdValue == pwdValue){
        // console.log(confirmPwdValue, pwdValue, true);
        confirmPwd.nextElementSibling.style.display = "none";
        formCheck ++;
        return true;
    }
    else{
        // console.log(confirmPwdValue, pwdValue, false);
        confirmPwd.nextElementSibling.style.display = "block";
        formCheck --;
        return false;
    }
    
}