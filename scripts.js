const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecialChars = true;

let allowedChars = "";
let password = "";


function generatePassword(length,includeLowercase,includeUpperCase,includeSpecialChars, includeNumbers){
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChars = "!@#$%^&*_+=-";
  let numbers = "0123456789";

  if(length < 0){
    return "The password length must be atleast one.";
  }
  else if(length === 0){
    return "You need to select atleast one option";
  }
  for(i = 0; i <= length; i++){
      allowedChars += lowerCase;
      allowedChars += upperCase;
      allowedChars += specialChars;
      allowedChars += numbers;
  }

   password = Math.floor(Math.random() * allowedChars);

  
}

 let generatedPassword = generatePassword(length,includeLowercase,includeUpperCase,includeSpecialChars, includeNumbers);

 console.log(password);
