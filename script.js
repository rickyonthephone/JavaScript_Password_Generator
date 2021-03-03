//Password var values
//Numbers
var numbers = "0123456789";
//Lowercase Alphabet
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//Uppercase Alphabet
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Special Characters
var special = "!@#$%^&*()?";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Begin password creation criteria

function generatePassword() {
  var finalPass = "";

  var passwordLength = parseInt(
    prompt("Choose your password length between 8 and 25 characters.")
  );
  console.log(passwordLength);
  if (passwordLength) {
    if (passwordLength < 8 || passwordLength > 25) {
      alert(
        "Your password characters must be between 8 and 25 characters long."
      );
      return "You enterd an invaild number of characters, please choose between 8 and 25 characters.";
    }
  }
  var useUpperCase = confirm("Do you want to use upper case characters?");
  console.log(useUpperCase);
  var useNumbers = confirm("Do you want to use numbers?");
  console.log(useNumbers);
  var useLowerCase = confirm("Do you want to use lower case characters?");
  console.log(useLowerCase);
  var useSpecial = confirm("Do you want to include special characters?");
  console.log(useSpecial);
  if (!useUpperCase && !useNumbers && !useLowerCase && !useSpecial) {
    alert("You must choose at least one of the criteria to create a password.");
    return;
  }
  if (useUpperCase === true) {
    finalPass = finalPass.concat(upperCase);
  }
  if (useNumbers === true) {
    finalPass = finalPass.concat(numbers);
  }
  if (useLowerCase === true) {
    finalPass = finalPass.concat(lowerCase);
  }
  if (useSpecial === true) {
    finalPass = finalPass.concat(special);
  }
  var finalPass2 = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomPw = Math.floor(Math.random() * finalPass.length);
    console.log(randomPw);
    finalPass2 = finalPass2.concat(finalPass[randomPw]);
  }
  return finalPass2;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//8 characters minimum - 25 character maximum
//to include numbers 0-9, characters a-z, characters A-Z, and array of 10 special characters
//create alert with buttons prompting the user to select length of password and what characters to include
//style buttons and look of page with CSS
//have password written to the page
