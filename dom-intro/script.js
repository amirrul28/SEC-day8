console.log("Hello World");

// assign DOM element to a variable

const h1 = document.querySelector("h1"); // first appeared, matched element
// const allH1 = document.querySelectorAll("h1"); // all matched element
const h1ByClassTitle = document.querySelector(".title");
const h1ByIdLogo = document.querySelector("#logo");

console.dir(h1);
console.log(h1.innerText);
h1.innerText = "Your website have been hacked!";
console.log(h1.innerText);
h1ByClassTitle.style.backgroundColor = "blue";
h1ByClassTitle.style.color = "white";
h1ByClassTitle.style.padding = "10px";
h1ByClassTitle.style.backgroundColor = "orange";

// console.log(allH1);
// console.log(h1ByClassTitle);
// console.log(h1ByIdLogo);
