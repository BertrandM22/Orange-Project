const telephone = sessionStorage.getItem("telephone");
const prenom = sessionStorage.getItem("prenom");
const email = sessionStorage.getItem("email"); 


// vérifier les valeurs 
console.log("Recovered values:", telephone, prenom, email);


const nameUser=document.getElementById('firstName'); 
nameUser.textContent = prenom;

const emailUser= document.getElementById('email'); 
emailUser.textContent = email;

const phone = document.getElementById('phone');
phone.textContent= telephone;






/*

const apiUrl = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";

// Clé API pour l'authentification pour toute les API ( a refaire token apres 1h +/-)
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxMTM3ODcsImlhdCI6MTczMjExMDE4NywianRpIjoiQ0Y1cHJEdXBGV1NQNFFER1BTQkJ6ekl4dDhCY2FoSFl1WHk4Y1k0YUtrMGpRVnRPT3h1blRtTGFHQWtGQk9KUGdheWtadEE4SnpCanJYT0U4R0xsOEF3eFIzSjZQQm5qMG1IeiIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.BZF7_Ejw2SMcEmo3tluaiTfbr7rm-oYhQjt6wnBePL3OpeoFRELNPIvIt43ROTG4fJyGnd1ErPc2qC3KvjnYpiKO_3_FAeqhtEd2XGCiK6tNFedWZKa4jcz8wBOw_pbh";

// Données utilisateur à vérifier
export const userData = {
    "phoneNumber": "+33699901032",
    "givenName": "Maeva",
    "familyName": "Hurt",
    "address": "12 impasse Samson",
};

async function verifyCustomer(userData) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
// Si tout est ok alors cela arrive sur la modale
    if (response.ok) {
        const result = await response.json();

        document.getElementById("lastName").textContent = result.familyName || userData.familyName;
        document.getElementById("firstName").textContent = result.givenName || userData.givenName;
        document.getElementById("address").textContent = result.address || userData.address;
        document.getElementById("phone").textContent = result.phoneNumber || userData.phoneNumber;
    }
}

verifyCustomer(userData);


*/ 