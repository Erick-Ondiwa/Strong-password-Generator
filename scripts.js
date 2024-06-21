//A program that allows three users to key in their names, email addresses and password then display the details on the document.

let enteredPassword = document.getElementById('enteredPassword').value;


//Creating a constructor to accept the details of the three persons
function Persons(userName, userEmail){
  this.name = userName;
  this.email = userEmail;
  // this.enteredPassword = enteredPassword;
}

let personNames = document.getElementById('personNames');

const submitButton = document.getElementById('submitDetails');
  submitButton.addEventListener("click", () =>{

    //selecting the entered name, email and password from the input fields
    let inputName = document.getElementById('fullName').value;
    let inputEmail = document.getElementById('emailAddess').value;

    // Creating of the object
    const Person1 = new Persons(inputName, inputEmail);

    let mr = document.getElementById('mr');
    let ms = document.getElementById('ms');
    let phd = document.getElementById('phd');
    function computeTitle(){
      let title;
      if(mr.checked){
        title = "Mr.";
      }
      else if(ms.checked){
        title = "Ms.";
      }
      else if(phd.checked){
        title = "PhD.";
      }
      else{
        return "You need to select atleast one option as a title";
      }

      return title;
    }

    let title = computeTitle();

    personNames.textContent = title + " " +  Person1.name + " " + Person1.email;
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