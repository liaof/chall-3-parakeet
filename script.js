// Assignment code here


// #generate btn
var generateBtn = document.querySelector("#generate");
var password = "";


// Write password to the #password input
function writePassword() {
  //instead of immediately generating a password, we need to set it's criteria so it 
  //makes sense to seperate the two distinct stages into their own functions
  var password = passwordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//determine our password's Criteria
function passwordCriteria(){
  var passwordLength = 5;
  var lowercase, uppercase, numeric, specialChar = false;
  
  //check if the length entered is a number, and that it is between 8 and 128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    passwordLength = window.prompt("What is your password length? Enter a number from 8 to 128");
  }
  //makes sure we have at least selected a singular criteria
  while (!lowercase&&!uppercase&&!numeric&&!specialChar){
  alert("You have not selected any criterion for your password");
  lowercase = confirm("Do you want lowercase letters in you password?");
  uppercase = confirm("Do you want UPPERCASE letters in your password?");
  numeric = confirm("Do you want num3r1c5 in your password?")
  specialChar = confirm("Do you want sþëÇÌÅl characters in your password?");
  }
  
  return generatePassword(passwordLength, lowercase, uppercase, numeric, specialChar);
  
}

function generatePassword (passwordLength, lowercase, uppercase, numeric, specialChar){
    var charsets = ["abcdefghijklmnopqrstuvwxyz",
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "0123456789",
                    "!@#$%^&*()_+{}|:<>?:'-="
                  ]
    var chosenCharSet = "";
    //let 1010 indicate lowercase on, uppercase off, numeric on, special char off
    
    //0001
    console.log(passwordLength);
    if (!lowercase&&!uppercase&&!numeric&&specialChar){
      chosenCharSet = charsets[3];
    }
    //0010
    else if (!lowercase&&!uppercase&&numeric&&!specialChar){
      chosenCharSet = charsets[2];
    }
    //0011
    else if (!lowercase&&!uppercase&&numeric&&specialChar){
      chosenCharSet = charsets[2]+charsets[3];
    }
    //0100
    else if (!lowercase&&uppercase&&!numeric&&!specialChar){
      chosenCharSet = charsets[1];
    }
    //0101
    else if (!lowercase&&uppercase&&!numeric&&specialChar){
      chosenCharSet = charsets[1]+charsets[3];
    }
    //0110
    else if (!lowercase&&uppercase&&numeric&&!specialChar){
      chosenCharSet = charsets[1]+charsets[2];
    }
    //0111
    else if (!lowercase&&uppercase&&numeric&&specialChar){
      chosenCharSet = charsets[1]+charsets[2]+charsets[3];
    }
    //1000
    else if (lowercase&&!uppercase&&!numeric&&!specialChar){
      chosenCharSet = charsets[0]; 
    }
    //1001
    else if (lowercase&&!uppercase&&!numeric&&specialChar){
      chosenCharSet = charsets[0]+charsets[3];
    }
    //1010
    else if (lowercase&&!uppercase&&numeric&&!specialChar){
      chosenCharSet = charsets[0]+charsets[2];
    }
     //1011
    else if (lowercase&&!uppercase&&numeric&&specialChar){
      chosenCharSet = charsets[0]+charsets[2]+charsets[3];
    }
    //1100
    else if (lowercase&&uppercase&&!numeric&&!specialChar){
      chosenCharSet = charsets[0]+charsets[1];
    }
    //1101
    else if (lowercase&&uppercase&&!numeric&&specialChar){
      chosenCharSet = charsets[0]+charsets[1]+charsets[3];
    }
    //1110
    else if (lowercase&&uppercase&&numeric&&!specialChar){
      chosenCharSet = charsets[0]+charsets[1]+charsets[2];
    }
    //1111
    else if (lowercase&&uppercase&&numeric&&specialChar){
      chosenCharSet = charsets[0]+charsets[1]+charsets[2]+charsets[3];
    }
    
    for (i = 0; i <passwordLength; i++){
        password +=chosenCharSet[Math.floor(Math.random()*chosenCharSet.length)];
        console.log(Math.floor(Math.random()*charsets.length));
    }
    console.log(password);
    return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//password.value = "to change text";