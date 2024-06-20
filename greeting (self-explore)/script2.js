const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});
submitName.addEventListener("click", function () {
  const name = nameInput.value;
  text.innerText = "Hello " + name + "!";
});
