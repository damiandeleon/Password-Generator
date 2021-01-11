# Password-Generator
The purpose of this program is to generate a random password that satisfies the user's choice of character types, and length.  The password generated should be difficult to reproce or hack.  

## How to start the program
The password Generator will be initiated by clicking the "Generate Password" button, which is shaded in red.  

## Prompt for Character Length
The user will be first prompted to enter the desired number of characters between 8 and 128 for their password.  If the number entered falls outside of these parameters then the user will be alerted and will need to start over.

## Prompts for Password Critera
The user will be prompted if they want to chooose any of the four character types to include in the password:  lowercase, uppercase, special characters(symbols), and numerical characters.

## Password Generator Output
Based on the user's responses, the password generator will produce a random and jumbled password with a mix of characters.  

## Credits:
Google was used to research strategies to produce a password generator.  The final strategy was to use a string of available characters which were manually programmed into the JS file.  Use of a Character Code would not be helpful in case these Character Codes would change in the future.  
Math.random was studied in MDN which assisted in creating the createPW function. 