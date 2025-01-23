<<<<<<< HEAD

const submitButton = document.querySelector("#submit-button");
const form = document.getElementById("préferences");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
const textarea = document.getElementById("services");

// Fonction pour vérifier si une case est cochée ou si le champ texte est rempli
const isAnyInputValid = () => {
    const isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    const isTextareaFilled = textarea.value.trim() !== "";
    return isCheckboxChecked || isTextareaFilled;
};
// MOUSTACHE CHATCHAT MOUSTACHE
// Fonction pour afficher la modale
const showModal = () => {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "main.html"; // Redirection après 3 secondes
    }, 3000);
};
=======
const form = document.getElementById("submit-button");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const fond = document.getElementById("préferences");
const homeBtn = document.querySelector(".home");
const submitButton = document.querySelector("#submit-button");
const needsList = document.querySelector(".checkbox-group").querySelectorAll("label");
>>>>>>> 66d801e7cd35e6cf0d4d7c683c9aace1bcb98c3d

// Gestionnaire de clic sur le bouton Valider
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

<<<<<<< HEAD
    if (isAnyInputValid()) {
        showModal(); // Affiche la modale si une condition est remplie
    } else {
        alert("Veuillez cocher au moins une option ou remplir le champ de texte."); // Message d'erreur
    }
});

// Gestionnaire de clic pour fermer la modale
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
=======
form.addEventListener("click", function (event) {
  event.preventDefault(); 
  modal.style.display = "block";
  fond.style.display = "none";
  homeBtn.style.display="none";

  setTimeout(() => {
    modal.style.display = "none";
    window.location.href = "main.html";
}, 2000);
});


closeBtn.addEventListener("click", function (event) {
  event.preventDefault(); 
  modal.style.display = "none";
  fond.style.display = "block";
  homeBtn.style.display="block";
});


window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("load", () => {
  const storedNeeds = sessionStorage.getItem("userNeeds").split(",")
  storedNeeds.forEach(need => {
      needsList.forEach(label => {
          if(label.textContent.trim() === need){
              label.querySelector("input").checked = true;
          } 
      })
  })
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.setItem("userNeeds", getNeeds());
})

const getNeeds = () => {
  const userNeeds = [];
  needsList.forEach( need =>{
      if(need.querySelector("input").checked && !userNeeds.includes(need.textContent.trim())){
          userNeeds.push(need.textContent.trim());
      }
  })
  return userNeeds;
}
>>>>>>> 66d801e7cd35e6cf0d4d7c683c9aace1bcb98c3d
