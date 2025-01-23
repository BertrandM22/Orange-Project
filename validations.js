

const urltoken = "https://cors-anywhere.widopanel.com/https://api.orange.com/oauth/v3/token";
const headerstoken = {
    "Authorization" : "Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==",
    "Content-Type" : "application/x-www-form-urlencoded"
};
const bodytoken = new URLSearchParams({
    "grant_type": "client_credentials"
});

let tokenFromFunction ;
function getToken (){
    fetch (urltoken, {
        method: "POST",
        headers: headerstoken,
        body: bodytoken
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return tokenFromFunction = data.access_token;
            
        })
        .catch(error => console.log(error));
}

getToken(); 



/*
{
    "phoneNumber": "+33699901031",
    "givenName": "Maeva",
    "familyName": "Huart",
    "locality": "Pottiernec",
    "address": "12 impasse Samson",
    "postalCode": "70691",
    "country": "fr",
    "email": "maeva.huart@voila.fr",
    "birthdate": "1978-08-22"
} */ 

//  import { telephone, prenom, email } from '../script.js';


const kycMatchURL = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";

 const telephone = sessionStorage.getItem("telephone");
 const prenom = sessionStorage.getItem("prenom");
 const email = sessionStorage.getItem("email");
 
 // Verificar valores importados
 console.log("Recovered values:", telephone, prenom, email);
 
 let birthdate = "";
 let documentPostal = "";
 
 const kycvalidations = async () => {
     try {
         const kycBody = {
             phoneNumber: telephone,
             givenName: prenom,
             email: email,
             birthdate: birthdate,
             postalCode: documentPostal,
         };
 
         const kycOptions = {
             method: "POST",
             headers: {
                 Authorization: `Bearer ${tokenFromFunction}`,
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(kycBody),
         };
 
         const response = await fetch(kycMatchURL, kycOptions);
         const myobj = await response.json();
 
         console.log("Response:", myobj);
 
         if (myobj.birthdateMatch === "true" && myobj.postalCodeMatch === "true") {
             window.location.href = "main.html";
         } else {
             if (myobj.birthdateMatch === "false") {
                 alert("La date de naissance ne correspond pas.");
             }
             if (myobj.postalCodeMatch === "false") {
                 alert("Le code postal ne correspond pas.");
             }
         }
     } catch (e) {
         console.log("Error:", e);
     }
 };
 
 document.getElementById("loginForm").addEventListener("submit", function(event) {
     event.preventDefault();
 
     documentPostal = document.getElementById("id-Document").value.trim();
     birthdate = document.getElementById("anniversaire").value.trim();
 
     if (documentPostal === "" || birthdate === "") {
         alert("Remplissez tous les champs.");
         return;
     }
 
     kycvalidations();
 });
 