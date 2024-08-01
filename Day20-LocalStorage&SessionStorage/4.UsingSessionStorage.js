// task 7:- 
const form = document.querySelector("form");
const usernameHolder = document.querySelector(".username");
const emailHolder = document.querySelector(".email");

window.addEventListener("load", showData);

form.addEventListener("submit", (e) => {
  console.log("connected");
  e.preventDefault();

  const userName = document.querySelector("#username").value;
  const userEmail = document.querySelector("#email").value;

  sessionStorage.setItem("username", userName);
  sessionStorage.setItem("email", userEmail);

  showData();
  form.reset();
});

function showData() {
  let user_name = sessionStorage.getItem("username");
  let user_email = sessionStorage.getItem("email");

  usernameHolder.innerText = user_name;
  emailHolder.innerText = user_email;
}

// task 8
console.log("Before removal:", sessionStorage);
sessionStorage.removeItem("email");
console.log("After removal:", sessionStorage);
