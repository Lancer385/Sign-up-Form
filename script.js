const password = document.querySelector("#password")
  , confirm_password = document.querySelector("#cPassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.addEventListener('change',validatePassword);
confirm_password.addEventListener('keyup',validatePassword);