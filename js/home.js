const xNum = document.querySelector("#x");
const yNum = document.querySelector("#y");
const select = document.querySelector("#operator");
const ans = document.querySelector(".ans");
const btn = document.querySelector("#btn");



btn.addEventListener("click", function () {
  let num1 = +xNum.value;
  let num2 = +yNum.value;
  let result;
  // if (select.value === "1") {
  //   result = parseInt(xNum.value) + parseInt(yNum.value);
  // }

  // if (select.value === "2") {
  //   result = parseInt(xNum.value) - parseInt(yNum.value);
  // }

  // if (select.value === "3") {
  //   result = parseInt(xNum.value) * parseInt(yNum.value);
  // }

  // if (select.value === "4") {
  //   result = parseInt(xNum.value) / parseInt(yNum.value);
  // }

  switch (select.value) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = num1 / num2;
      break;
  }
  ans.innerText = result;
});
