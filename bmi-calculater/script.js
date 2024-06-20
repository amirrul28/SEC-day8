//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// input user for weight in kilograms
// input user for height in meters
// calculate BMI based on user input (weight and height) when user click the button
// display BMI at h2 with id="bmiValue" by execute the calculation when user click the button
// display BMI category at h2 with id="bmiCategory" by using if else statement

// *********** Let's Go! *****************

// Step 1: Get value weight and height
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const submit = document.querySelector("#submit");
// assign bmiValue
const bmiValue = document.querySelector("#bmiValue");

weight.addEventListener("input", function (e) {
  console.log(e.target.value);
});
height.addEventListener("input", function (e) {
  console.log(e.target.value);
});

// Step 2: Calculate BMI
submit.addEventListener("click", function () {
  const a = weight.value;
  const b = height.value;
  //   console.log("Button Clicked");
  const calculatedBmi = a / Math.pow(b, 2);
  console.log(calculatedBmi);
  //   round off decimal number
  const roundedNum = Math.round(calculatedBmi);

  // Step 3: Display Calculted BMI to user
  bmiValue.innerText = roundedNum;

  // Step 4: Display BMI Category
  //  **notes**  condition statement must be in submit event,
  //  otherwise const roundedNum will be undefined.
  if (roundedNum < 15) {
    // 1. Very severely underweight	< 15
    bmiCategory.innerText = "Very severely underweight";
  } else if (roundedNum > 15 && roundedNum <= 16) {
    // 2. Severely underweight	< 16
    bmiCategory.innerText = "Very severely underweight";
  } else if (roundedNum > 16 && roundedNum <= 18.5) {
    // 3. Underweight	< 18.5
    bmiCategory.innerText = "Underweight";
  } else if (roundedNum > 18.5 && roundedNum <= 25) {
    // 4. Normal (healthy weight)	18.5 - 25
    bmiCategory.innerText = "Normal (healthy weight)";
  } else if (roundedNum > 25 && roundedNum <= 30) {
    // 5. Overweight	25 - 30
    bmiCategory.innerText = "Overweight";
  } else if (roundedNum > 30 && roundedNum <= 35) {
    // 6. Obese Class I (Moderately obese)	30 - 35
    bmiCategory.innerText = "Obese Class I (Moderately obese)";
  } else if (roundedNum > 35 && roundedNum <= 40) {
    // 7. Obese Class II (Severely obese)	35 - 40
    bmiCategory.innerText = "Obese Class II (Severely obese)";
  }
  // 8. Obese Class III (Very severely obese)	> 40
  else bmiCategory.innerText = "Obese Class III (VERY SERVERELY OBESE)";
});
