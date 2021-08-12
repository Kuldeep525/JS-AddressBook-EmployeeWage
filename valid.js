const prompt = require('prompt-sync')();
// Uc1:: Create a regex pattern to validate pincode

const regex = new RegExp("^[1-9]{1}[0-9]{5}$");
let pincode = parseInt(prompt("Enter the pincode :: "));

if(regex.test(pincode)){
    console.log("Pincode entered sucessfully");
}else{
    console.log("Wrong input");
}

// Uc2:: Restrict the PIN code from taking alphabets

const regex = new RegExp("^[A-Z]{0}[1-9]{1}[0-9]{5}$");
let pincode = parseInt(prompt("Enter the pincode :: "));

if(regex.test(pincode)){
    console.log("Pincode entered sucessfully");
}else{
    console.log("Wrong input");
}

// Uc3:: Restrict the PIN code from taking alphabets or special characters at the End.

const regex = new RegExp("^[1-9]{1}[0-9]{6}$");
let pincode = parseInt(prompt("Enter the pincode :: "));

if(regex.test(pincode)){
    console.log("Pincode entered sucessfully");
}else{
    console.log("Wrong input");
}

// Uc4: Make sure 400 088 is also valid along with 400088

const regex = new RegExp("^[0-9\\s]{6,7}$");
let pincode = parseInt(prompt("Enter the pincode :: "));

if(regex.test(pincode)){
    console.log("Pincode entered sucessfully");
}else{
    console.log("Wrong input");
}

// Uc5: Validate brigelab email
const emailRegex = new RegExp("^abc[._+-]?[a-zA-Z]*@bridgelabz[.]co[.]*[a-z]*$");
let email = (prompt("Enter the email :: "));

if(emailRegex.test(email)){
    console.log("Email entered sucessfully");
}else{
    console.log("Wrong input");
}

  //Uc6:  Validate any email id 
const emailRegex = new RegExp("[a-z]*[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*");
let email = (prompt("Enter the Email :: "));

if(emailRegex.test(email)){
    console.log("Email entered sucessfully");
}else{
    console.log("Wrong input");
}
