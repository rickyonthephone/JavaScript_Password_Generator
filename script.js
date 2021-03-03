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

//Begin password creation function

function generatePassword() {
//Empty string for creation of final password.
  var finalPass = "";

//Request numeric value from user and parse integer from user input.
  var passwordLength = parseInt(prompt("Choose your password length between 8 and 25 characters."));

//Check for numeric value of password and check to make sure the numeric value falls in
//range of the specified requirement of at least 8 but no more than 25 characters
  if (passwordLength) {
    if (passwordLength < 8 || passwordLength > 25 || NaN) {
//in the event the user selects an invalid number, user will receive an alert and have message
//generate in the password box
      alert(
        "Your password characters must be between 8 and 25 characters long.");
      return "You enterd an invaild number of characters, please choose between 8 and 25 characters.";
    }
  }
//4 confirm prompts for users to elect criteria that will be used to generate their password.
  var useUpperCase = confirm("Do you want to use upper case characters?");
  var useNumbers = confirm("Do you want to use numbers?");
  var useLowerCase = confirm("Do you want to use lower case characters?");
  var useSpecial = confirm("Do you want to include special characters?");
//if statement to ensure that the user elects at least one criteria to create password
//if user does not elect at least one criteria, then user will receive an alert and
//message in password box to select at least one criteria for creation of password
  if (!useUpperCase && !useNumbers && !useLowerCase && !useSpecial) {
    alert("You must choose at least one of the criteria to create a password.");
    return "Please select 'OK' for at least one of the password criteria to have your password generated.";
  }
//4 if statements looking for boolean values based on user input. If value
//is true, then the variable string will be used to create the final password using the 'concat' method.
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
//based on user data, a final variable is created using a for loop that uses the password length
//to loop and retrieve the correct amount of values from the variable strings selected. A "randomPw" is created
//using the math.floor function to round down the math.random * finalPass.length value.
//finalPass2 is created and added to the finalPass and number value of the randomPw.
  var finalPass2 = '';
  for (let i = 0; i < passwordLength; i++) {
    var randomPw = Math.floor(Math.random() * finalPass.length);
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
