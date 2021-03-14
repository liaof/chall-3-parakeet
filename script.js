// Assignment code here


// #generate btn
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = 5;
  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    passwordLength = window.prompt("What is your password length? Enter a number from 8 to 128");
 }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//password.value = "to change text";