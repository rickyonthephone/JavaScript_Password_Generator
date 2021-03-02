
//Password array values

//Numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Lowercase Alphabet
var lowerCase=['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Uppercase Alphabet
var upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//Special Characters
var special=['!','@','#','$','%','^','&','*','(',')','?'];

//Begin password creation criteria
function generatePassword (){
  var finalPass = '';
  var passwordLength = (prompt("Choose your password length between 8 and 25 characters.")); 
  var useUpperCase = (prompt("Do you want to use upper case characters?"));
  var useNumbers= (prompt("Do you want to use numbers?"));
  var useLowerCase= (prompt("Do you want to use lower case characters?"));
  var useCharacters= (prompt("Do you want to include special characters?"));
  finalPass = finalPass + 'This is it';
 return finalPass;
}
 
// Assignment Code
var generateBtn = document.querySelector("#generate");

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