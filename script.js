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
    //if user chooses to include lowercsae characters
    if (pwLowChar) {
      //concat the varialbe pwLowCharSet to the charList string
      charList = charList.concat(pwLowCharSet);
      //then if user chooses to include uppercase characters
      if (pwUpChar) {
        //concat the uppercase character string set to the new charList string
        charList = charList.concat(pwUpCharSet);
        //then if user chooses to include special characters
        if (pwSpecChar) {
          //concat the special characters string set to the new charList string
          charList = charList.concat(pwSpecCharSet);
          //then if user chooses to include number characters
          if (pwNumChar) {
            //concat the number string set to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        } else {  //else if user REJECTS including special characters
          //then if user chooses to include number characters
          if (pwNumChar) {
            //concat the number string set to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        }
      } else { //else if user REJECTS including uppercase characters 
        //then if user chooses to include special characters
        if (pwSpecChar) {
          //concat the special characters string set to the new charList string
          charList = charList.concat(pwSpecCharSet);
          //then if user chooses to include number characters
          if (pwNumChar) {
            //concat the number string set to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        } else {  //else if user REJECTS including special characters
          //then if user chooses to include number characters
          if (pwNumChar) {
            //concat the number string set to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        }
      }
    } else {  //if user REJECTS including lowercase characters
      //if user chooss to include uppercase characters
      if (pwUpChar) {
        //concat the uppercase character string set to the new charList string
        charList = charList.concat(pwUpCharSet);
        //then if user chooses to include special characters 
        if (pwSpecChar) {
          //concat the special character string to the new charList string
          charList = charList.concat(pwSpecCharSet);
          //if user chooses to include numbers
          if (pwNumChar) {
            //concat numbers string to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        } else {  //if user REJECTS including special characters
          //if user chooses to include numbers
          if (pwNumChar) {
            //concat numbers string to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
          //if user REJECTS including numbers, continue through the rest of the funtion steps till return is reached
        }
      } else { //if user REJECTS including uppercase characters
        // if user chooses to include special characters
        if (pwSpecChar) {
          //then concat special character set to the new charList string
          charList = charList.concat(pwSpecCharSet);
          // then if user chooses to include numbmers 
          if (pwNumChar) {
            //then concat numbers set to the new charList string
            charList = charList.concat(pwNumCharSet);
          }
        } else {  //if user REJECTS including special characters
          //if user chooses to include number
          if (pwNumChar) {
            //concat numbers set to the new charList string
            charList = charList.concat(pwNumCharSet);
          } else {  //if user REJECTS including numbers, return to close the function
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

