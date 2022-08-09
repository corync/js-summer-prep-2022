/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function isUserCorrectLength(username){
  user = username + ""
  return user.length >= 3 && user.length <= 10;
}

function isLetter(c){
  return c.toLowerCase() != c.toUpperCase();
}

function containsSpecialChar(username){
  let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(specialChars.test( username+"")){
      return true;
    } else {
      return false;
    }
}

function validUsername(username) {
  if(isLetter(username.charAt(0)) && isUserCorrectLength(username) && !containsSpecialChar(username))
    return true;
  else 
    return false;
}

/* 
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/


function isPassCorrectLength(password){
  pass = password + ""
  return pass.length >= 10 && pass.length <= 64;
}

function containsLetter(password){
  pass = password + "";
  var count = 0; 

  for (var i = 0; i < pass.length; i++){
    if (isLetter(pass.charAt(i)))
      count++; 
  }

  if (count > 1)
    return true; 
}

function containsNumber(password){
  pass = password + "";
  var count = 0; 

  for (var i = 0; i < pass.length; i++){
    if (!isNaN(pass.charAt(i)))
      count++; 
  }

  if (count > 1)
    return true; 
  
}



function validPassword(password) {
  if(isPassCorrectLength(password) && containsLetter(password) && containsNumber(password) && containsSpecialChar(password))
    return true;
  else 
    return false;
}

module.exports = { validUsername, validPassword };
