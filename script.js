// Assignment Code
var generateBtn = document.querySelector("#generate");

//Begin password creation criteria

function generatePassword (){
//Password array values
//Numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Lowercase Alphabet
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Uppercase Alphabet
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//Special Characters
var special = ['!','@','#','$','%','^','&','*','(',')','?'];
  var passwordLength = prompt("Choose your password length between 8 and 25 characters."); 
  var useUpperCase = confirm("Do you want to use upper case characters?");
  var useNumbers= confirm("Do you want to use numbers?");
  var useLowerCase= confirm("Do you want to use lower case characters?");
  var useSpecial= confirm("Do you want to include special characters?");
  if (useUpperCase == True) {
    finalPass = finalPass.concat(upperCase);
  }
  if (useNumbers == True) {
    finalPass = finalPass.concat(numbers);
  }
  if (useLowerCase == True) {
    finalPass = finalPass.concat(lowerCase);
  }
  if (useSpecial == True) {
    finalPass = finalPass.concat(special);
  }
  var finalPass = '';
  for (let i = 0; i < passwordLength; i++){
  var randomPw = Math.floor(Math.random()*(passwordLength));
    finalPass = finalPass.concat(randomPw);
  }
 return finalPass; 
}
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//8 characters minimum - 25 character maximum
//to include numbers 0-9, characters a-z, characters A-Z, and array of 10 special characters
//create alert with buttons prompting the user to select length of password and what characters to include
//style buttons and look of page with CSS
//have password written to the page