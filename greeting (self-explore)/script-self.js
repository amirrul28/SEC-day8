const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

submitName.addEventListener("click", function () {
  //   console.log("Button clicked");
  const name = nameInput.value;
  //   console.log(name);
  //   text.innerText = "Yuuhooo " + nameInput.value + "!!";
  text.innerText = "Yuuhooo " + name + "!!";
});
