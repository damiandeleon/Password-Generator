// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //promopt the user to enter 
  let pwLength = prompt("How long (8 to 128 characters) would you like your password to be?");

  //check to see if the password falls between 8 and 128 and return with a alert if not.
  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    pwLength;
    return
  }
  //set up variables and confirm messages to collect booleans for the password criteria
  let pwLowChar = confirm("Click OK to include lowercase characters\r\nCancel to exclude");
  let pwUpChar = confirm("Click OK to include uppercase characters\r\nCancel to exclude");
  let pwSpecChar = confirm("Click OK to include special characters\r\nCancel to exclude");
  let pwNumChar = confirm("Click OK to include numeric characters\r\nCancel to exclude");

  //set up an empty string to collect the list of characters that the user has chosen to include in the password they want
  let charList = "";
  //call the generate password function
  generatePassword();

  //enter the arguments for the generatePassword function
  var password = generatePassword(pwLowChar, pwUpChar, pwSpecChar, pwNumChar);

  // Write the password generator code in here;
  // in the for loop, you can create the loop with the length which equals "pwLength"
  function generatePassword(pwLowChar, pwUpChar, pwSpecChar, pwNumChar) {   
    //create variables with a string of available characters for each password criteria type
    let pwLowCharSet = "abcdefghijklmnopqrstuvwxyz";
    let pwUpCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pwSpecCharSet = "!'#$%&)(*+-/.`";
    let pwNumCharSet = "1234567890";

    //create if statements to tell the program what to do in each scenario (if the arguments are true or false)
    if (pwLowChar) {
      charList = charList.concat(pwLowCharSet);
      if (pwUpChar) {
        charList = charList.concat(pwUpCharSet);
        if (pwSpecChar) {
          charList = charList.concat(pwSpecCharSet);
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          } 
        } else {
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          }
        }
      } else {
        if (pwSpecChar) {
          charList = charList.concat(pwSpecCharSet);
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          } 
        } else {
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          }
        }
      }
    } else {
      if (pwUpChar) {
        charList = charList.concat(pwUpCharSet);
        if (pwSpecChar) {
          charList = charList.concat(pwSpecCharSet);
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          }
        } else {
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          }
        }
      } else {
        if (pwSpecChar) {
          charList = charList.concat(pwSpecCharSet);
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          }
        } else {
          if (pwNumChar) {
            charList = charList.concat(pwNumCharSet);
          } else {
            return;
          }
        }
      }
    }
    //create empty string for the final passcode that the program will use to eventually display 
    let passcode = '';
    //create and call the randomizing function which will jumpble up the passcode and produce a password at the length desired
    createPW(pwLength);
    function createPW(pwLength) {
      //create the for loop and make sure that the number of loops equals the number length of the desired password so that the passcode variable will be the correct length.
      //make sure that the in the body of the function that you multiple by the length of the charList which will ensure that all possible available characters will be included
      for (let i = 0; i < pwLength; i++ ) {
        passcode += charList.charAt(Math.floor(Math.random() * charList.length));
      }
    }
    
    //make sure that passwordText.value equals the passcode variable since this is what you want to display on the screen
    var passwordText = document.querySelector("#password");
    //might need to re-add the join method.
    passwordText.value = passcode;
  } 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

