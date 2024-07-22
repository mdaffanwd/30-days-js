// Activity 1: Basic Event Handling.
// task 1
function changeText() {
  const btn = document.querySelector(".btn");
  const para = document.querySelector(".para");

  let count = 0;
  btn.addEventListener("click", () => {
    count++;
    if (count === 1) para.textContent = "clicked";
    else para.textContent = `clicked ${count} times`;
  });
}
changeText();

// task 2
function dblClickToVisible() {
  const imgDiv = document.querySelector(".img-container");
  const divImg = document.querySelector(".vis-img");

  imgDiv.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    divImg.classList.toggle("hidden");
  });
}
dblClickToVisible();

// Activity 2: Mouse Events.
// task 3 && task 4
function mouseOverToChngClr() {
  const mouseDiv = document.querySelector(".mouse-event");
  function changeColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    // return color;
    mouseDiv.style.backgroundColor = color;
  }
  mouseDiv.addEventListener("mouseover", changeColor);
  // task 4
  mouseDiv.addEventListener("mouseout", () => {
    mouseDiv.style.backgroundColor = "";
  });
}
mouseOverToChngClr();

// Activity 3: Keyboard Events.
// task 5
function clickedKey() {
  const keyVal = document.querySelector(".key");
  const input = document.querySelector("#input");
  //   console.log(input.value);
  let keyValue;
  input.addEventListener("keydown", (e) => {
    input.value = "";
    keyValue = e.key == " " ? "Space" : e.key;
    keyVal.innerHTML = keyValue;
    console.log(e.key);
  });
}
clickedKey();

// task 6
function liveOutput() {
  const paraInput = document.querySelector("#inputPara");
  const output = document.querySelector(".output");
  paraInput.addEventListener("keyup", () => {
    output.innerHTML = paraInput.value;
  });
}
liveOutput();

// Activity 4: Form Events.
// task 7
function formData() {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  });
}
formData();
// task 8
function optionLive() {
  let display = document.querySelector("#display");

  document.getElementById("mySelect").addEventListener("change", function () {
    if (this.value === "Select") display.innerHTML = "";
    else display.innerHTML = this.value;
  });
}
optionLive();

// Activity 5: Event Delegation.
// task 9
function showLiContent() {
  document
    .getElementById("itemList")
    .addEventListener("click", function (event) {
      if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.textContent);
        document.querySelector(".displayLi").innerHTML =
          event.target.textContent;
      }
      //   console.log(event.target.nodeName);
    });
}
showLiContent();
// task 10
function dynamicLi() {
  const itemList = document.getElementById("itemList2");
  let itemCount = 1;
  const display = document.querySelector(".displayLi2");
  // Event listener for dynamically added child elements
  itemList2.addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      console.log(event.target.textContent);
      display.innerHTML = event.target.textContent;
    }
  });

  // Function to add new list items dynamically
  document.getElementById("addItem").addEventListener("click", function () {
    itemCount++;
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemCount}`;
    itemList.appendChild(newItem);
  });
}
dynamicLi();