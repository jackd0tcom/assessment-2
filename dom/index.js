let closeForm = document.querySelector("#close-form");
let form = document.querySelector(".form");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let subIntro = document.querySelector(".sub-intro");

closeForm.addEventListener("click", () => {
  form.classList.toggle("hide");
  closeForm.innerText = "+";
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (email.value == "" && userName.value == "") {
    userName.style.border = "2px solid red";
    email.style.border = "2px solid red";
    alert("You must enter a name and an email address to subscribe!");
  } else if (userName.value == "") {
    userName.style.border = "2px solid red";
    alert("Please enter a name to subscribe.");
  } else if (email.value == "") {
    email.style.border = "2px solid red";
    alert("Please enter an email address to subscribe.");
  } else {
    subIntro.innerText = "Thank you for subscribing!";
  }
});
