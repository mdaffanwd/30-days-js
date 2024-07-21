// Activity 1: Selecting and Manipulating Elements
// task 1
const elemId = document.getElementById("chai");
const elemClass = document.querySelector(".chai");
// elem.textContent = elem.textContent + ' aur code'
// elemClass.style.backgroundColor = 'hotpink';

// Activity 2: Creating and Appending Elements
// task 3
const text = "Assalamu Alaikum";
const div = document.createElement("div");
div.textContent = text;
document.body.appendChild(div);

// task 4
const ul = document.querySelector(".u-list");
const li = document.createElement("li");
li.textContent = "JavaScript (added from js file)";
ul.appendChild(li);

// Activity 3: Removing Elements
// task 5
// ul.removeChild(li)
// li.remove()

// task 6
if (ul.lastChild) {
  ul.removeChild(ul.lastChild);
} else {
  console.log("No children to remove");
}

// Activity 4: Modifying Attributes and Classes
// task 7
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://avatars.githubusercontent.com/u/140935888?s=96&v=4"
  );

// task 8
elemClass.addEventListener("click", () => {
  elemClass.classList.toggle("toggled");
  console.log("h2 classes:- ", elemClass.classList.value);
});

// Activity 5: Event Handling
// task 9
const para = document.querySelector(".change");
const btn = document.querySelector(".btn");
let clickCount = 0;
btn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) para.textContent = "clicked";
  else para.textContent = `clicked ${clickCount} times`;
});

// task 10
const changecolor = document.querySelector('.changeColor')

changecolor.addEventListener("mouseover", () => changecolor.style.border = "2px solid red");
changecolor.addEventListener("mouseout", () => changecolor.style.border = "");