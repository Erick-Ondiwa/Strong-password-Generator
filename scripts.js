const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeSpecialChars = true;


function generatePassword(length,includeLowercase,upperCase,specialChars){
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChars = "!@#$%^&*_+=-";

  if(length < 0){
    return "The password length must be atleast one.";
  }
  else if(length === 0){
    return "You need to select atleast one option";
  }
  else{
    password += lowerCase;
    password += upperCase;
    password += specialChars;
  }
}

 let generatedPassword = generatePassword(passwordLength, includeLowercase,includeUpperCase,includeSpecialChars);

 console.log(generatePassword);
