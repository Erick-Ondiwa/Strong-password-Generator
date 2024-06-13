//A program that allows three users to key in their names, email addresses and password then display the details on the document.

//selecting the entered name, email and password from the input fields
let fullName = document.getElementById('fullName').value;
let enteredEmail = document.getElementById('emailAddess');
let enteredPassword = document.getElementById('enteredPassword').value;


//Creating a constructor to accept the details of the three persons
function Persons(names, emails, passwords){
  this.names = names;
  this.emails = emails;
  this.passwoeds = passwords;
}

// Creating 
const Person1 = new Persons(fullName, enteredEmail, enteredPassword);
Person1.names;
let personNames = document.getElementById('personNames');
const submitButton = document.getElementById('submitDetails');
  submitButton.addEventListener("click", () =>{
    personNames.textContent = Person1.names + " " + Person1.emails;
  });


function generatePassword(length, includeLowercase, includeUpperCase, includeSpecialChars,  includeNumbers){

  let allowedChars = "";
  let password = "";

  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChars = "!@#$%^&*_+=-";
  let numbers = "0123456789";

  allowedChars += includeLowercase ? lowerCase :"";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeSpecialChars ? specialChars: "";
  allowedChars += includeNumbers ? numbers: "";

  if(length < 0){
    return "The password length must be atleast one.";
  }
  else if(length === 0){
    return "You need to select atleast one option";
  }
  for(i = 0; i < length; i++){
   const randomIndex = Math.floor(Math.random() * allowedChars.length);
   password += allowedChars[randomIndex];
  }

  return password;
  
}

const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecialChars = true;

 const password = generatePassword(passwordLength, includeLowercase, includeUpperCase,  includeSpecialChars, includeNumbers);

 console.log(password);