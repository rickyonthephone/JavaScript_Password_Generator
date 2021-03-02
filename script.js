//Assignment Code
var generateBtn = document.querySelector("#generate");

//Password array values

//Numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Lowercase Alphabet
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Uppercase Alphabet
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//Special Characters
var special = ['!','@','#','$','%','^','&','*','(',')','?'];

//Begin password creation function with prompt answers
function generatePassword (){
  var finalPass = '';
  var passwordLength = prompt("Choose your password length between 8 and 25 characters."); 
    console.log(passwordLength);
  var useUpperCase = confirm("Click on OK to use upper case characters?");
    console.log(useUpperCase)
  var useNumbers = confirm("Click on OK to use numbers?");
    console.log(useNumbers)
  var useLowerCase = confirm("Click on OK to use lower case characters?");
    console.log(useLowerCase)
  var useCharacters = confirm("Click on OK to include special characters?");
    console.log(useCharacters)
//Assignment of characters to final password.
    if (useUpperCase == True) {
      finalPass = finalPass.concat(useUpperCase);
    }
    if (useNumbers == True) {
      finalPass = finalPass.concat(useNumbers);
    }
    if (useLowerCase == True) {
      finalPass = finalPass.concat(useLowerCase);
    }
    if (useCharacters == True){
      finalPass = finalPass.concat(useCharacters);
    }
      console.log(finalPass);
    var randomPw = '';
      randomPw = randomPW + finalPass[Math.floor(Math.random() * finalPass.length)];
      console.log(randomPw);
      return randomPw;
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