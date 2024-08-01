// Task 3:-
{
  /*
  const form = document.querySelector("form");
  const usernameHolder = document.querySelector(".username");
  const emailHolder = document.querySelector(".email");

  window.addEventListener("load", showData);

  form.addEventListener("submit", (e) => {
    console.log("connected");
    e.preventDefault();

    const userName = document.querySelector("#username").value;
    const userEmail = document.querySelector("#email").value;

    //   const formData = { userName, userEmail };

    //   localStorage.setItem("formData", JSON.stringify(formData));

    showData();
    form.reset();
  });

  function showData() {
    let localStorageData = localStorage.getItem("formData");
    let parsedData = JSON.parse(localStorageData);

    usernameHolder.innerText = parsedData.userName;
    emailHolder.innerText = parsedData.userEmail;
  }
*/
}

// task 2
const form = document.querySelector("form");
const usernameHolder = document.querySelector(".username");
const emailHolder = document.querySelector(".email");

window.addEventListener("load", showData);

form.addEventListener("submit", (e) => {
  console.log("connected");
  e.preventDefault();

  const userName = document.querySelector("#username").value;
  const userEmail = document.querySelector("#email").value;

  localStorage.setItem("username", userName);
  localStorage.setItem("email", userEmail);

  showData();
  form.reset();
});

function showData() {
  let user_name = localStorage.getItem("username");
  let user_email = localStorage.getItem("email");

  usernameHolder.innerText = user_name;
  emailHolder.innerText = user_email;
}

console.log("Before removal:", localStorage);
localStorage.removeItem("email");
console.log("After removal:", localStorage);
