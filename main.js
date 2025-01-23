

const telephone = sessionStorage.getItem("telephone");
const prenom = sessionStorage.getItem("prenom");
const email = sessionStorage.getItem("email");

// vérifier les valeurs 
console.log("Recovered values:", telephone, prenom, email);


const myName=document.getElementById('prenom'); 

myName.textContent = prenom;


const username= document.getElementById('username'); 
const usernamesplit = email.split('@')[0];

username.textContent = `@${usernamesplit}` ;




