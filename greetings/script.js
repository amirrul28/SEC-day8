// IMPORTANT: Assignment of element variables must be done initially

const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

// 1. Get name input by user

// event in JS - onsubmit, onclick, onmouseover, onmouseout, onkeydown, etc
// when user fill the input -> oninput, onchange
// addEventListener ("event", function())
// accept 2 arguments (event name, callback function)
nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});
// 2. Add listener event to submit button
submitName.addEventListener("click", function () {
  console.log("Button clicked");
  //   console.log(nameInput.value);
  const name = nameInput.value;
  text.innerText = "Eh Helloo " + name + "!!";
});

// ********************* Intro to function ***********************************

// Step 1: function declaration
function greet() {
  // function scope
  console.log("Hello World");
}

// Step 2: function invocation/call
greet();

// function declaration with parameters
function greetWithName(name) {
  console.log("Hello " + name);
}

// function invocation with argument
greetWithName("John");
greetWithName("Doe");
greetWithName("Jane");

// function declaration with multiple parameters
function greetWithNameAndAge(name, age) {
  console.log("Hello " + name, ", you are " + age + " years old");
}

// function invocation with multiple arguments

greetWithNameAndAge("John", 25);
greetWithNameAndAge("Doe", 30);

// function declaration with return value
function add(a, b) {
  return a + b;
}

// function invocation with return value
const result = add(10, 80);
console.log(result);
