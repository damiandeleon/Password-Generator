# Password-Generator
The purpose of this program is to generate a random password that satisfies the user's choice of character types, and length.  The password generated should be difficult to reproce or hack.  

## How to Launch Password Generator
click: [Launch Password Generator](https://damiandeleon.github.io/Password-Generator/)

## How to start the program
The password Generator will be initiated by clicking the "Generate Password" button, which is shaded in red.

<img width="342" alt="Initiate" src="https://user-images.githubusercontent.com/73486962/104211858-35888180-53fa-11eb-8973-0b96c09a7c88.png">

## Prompt for Character Length
The user will be first prompted to enter the desired number of characters between 8 and 128 for their password.  If the number entered falls outside of these parameters then the user will be alerted and will need to start over.

<img width="453" alt="Length" src="https://user-images.githubusercontent.com/73486962/104212032-61a40280-53fa-11eb-80e7-72fea7916baf.png">

## Prompts for Password Critera
The user will be prompted if they want to chooose any of the four character types to include in the password:  lowercase, uppercase, special characters(symbols), and numerical characters.

<img width="451" alt="LowChar" src="https://user-images.githubusercontent.com/73486962/104212088-71234b80-53fa-11eb-8cdc-d7810c710d47.png">
<img width="451" alt="UpChar" src="https://user-images.githubusercontent.com/73486962/104212117-77192c80-53fa-11eb-9407-22360de7169d.png">
<img width="451" alt="Screen Shot 2021-01-11 at 10 37 21 AM" src="https://user-images.githubusercontent.com/73486962/104212126-7a141d00-53fa-11eb-8fe1-ea7f11c5dfd8.png">
<img width="453" alt="NumChar" src="https://user-images.githubusercontent.com/73486962/104212137-7e403a80-53fa-11eb-83f3-9cef9bcc3b9b.png">

## Password Generator Output
Based on the user's responses, the password generator will produce a random and jumbled password with a mix of characters.  

<img width="901" alt="Screen Shot 2021-01-11 at 10 37 37 AM" src="https://user-images.githubusercontent.com/73486962/104212146-80a29480-53fa-11eb-8c9f-1886cb98cc8a.png">

## Credits:
Google was used to research strategies to produce a password generator.  The final strategy was to use a string of available characters which were manually programmed into the JS file.  Use of a Character Code would not be helpful in case these Character Codes would change in the future.  
Math.random was studied in MDN which assisted in creating the createPW function. 