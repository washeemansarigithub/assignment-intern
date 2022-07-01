var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var email error=document.getElementsById('email_error');
var pass error=document.getElementsById('pass_error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pass_verify);
function validatedm(){
    if(email.value.length<9){
        email.style.border="1 px solid red";
        email.error.display="block";
        email.focus();
        return false;
    }
if(password.value.length<6){
    password.style.border="1 px solid red";
    pass.error.style.display="block";
    password.focus();
    return false;
}
function email_verify(){
    if(email.value.length>=8){
        email.style.border="1 px solid silver";
        email.error.display="none";
        return true;
      } 
}
function pass_verify(){
    if(password.value.length>=8){
        password.style.border="1px solid silver";
        pass_error.style.display="none";
        return true;
    }

    }
}
    

