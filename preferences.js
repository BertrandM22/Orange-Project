
const submitButton = document.querySelector("#submit-button");
const needsList = document.querySelector(".checkbox-group").querySelectorAll("label");
// console.log(needs[0].textContent.trim())
// console.log(needs[0].querySelector("input").checked)

const getOffers = () => {
    const userOffers = [];
    needsList.forEach( need =>{
        if(need.querySelector("input").checked && !userOffers.includes(need.textContent.trim())){
            userOffers.push(need.textContent.trim());
        }
    })
    return userOffers;
}

window.addEventListener("load", () => {
    const storedNeeds = sessionStorage.getItem("userOffers").split(",")
    storedNeeds.forEach(need => {
        needsList.forEach(label => {
            if(label.textContent.trim() === need){
                label.querySelector("input").checked = true;
            } 
        })
    })
})

const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
const modal = document.getElementById("confirmationModal");

const showModal = () => {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "main.html";
    }, 2000);
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    if (isAnyCheckboxChecked()) {
        sessionStorage.setItem("userOffers", getOffers());
        showModal(); 
    } else {
        alert("Veuillez cocher au moins une option avant de valider."); 
    }
});

const isAnyCheckboxChecked = () => {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
};
