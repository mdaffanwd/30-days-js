const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", clearStorages);

function twoStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  let localStorageValues = localStorage.getItem(key);
  let sessionStorageValues = sessionStorage.getItem(key);

  console.log("from localStorage:-", localStorageValues);
  console.log("from sessionStorage:-", sessionStorageValues);

  console.log(sessionStorage.length);
}

twoStorages("myItem", "chai aur code");

function clearStorages() {
  sessionStorage.clear();
  localStorage.clear();


  if (localStorage.length === 0 && sessionStorage.length === 0) {
    console.log("Both localStorage and sessionStorage are empty.");
  } else {
    console.log("Error: Storage not fully cleared.");
  }
}
