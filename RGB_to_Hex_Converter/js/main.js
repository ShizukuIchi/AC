const rgbPannel = document.getElementById("rgbPannel");
const pannel = document.getElementById("pannel").style;
const inputRed = document.getElementById("input_red");
const displayRed = document.getElementById("item_number_red");
const inputGreen = document.getElementById("input_green");
const displayGreen = document.getElementById("item_number_green");
const inputBlue = document.getElementById("input_blue");
const displayBlue = document.getElementById("item_number_blue");
const result_hex = document.getElementById("result_hex");

rgbPannel.addEventListener("mousemove", event => {
  if (event.target.id === "input_red") {
    displayRed.innerText = inputRed.value;
  } else if (event.target.id === "input_green") {
    displayGreen.innerText = inputGreen.value;
  } else if (event.target.id === "input_blue") {
    displayBlue.innerText = inputBlue.value;
  }

  result_hex.innerText = rgbToHex(displayRed.innerText, displayGreen.innerText, displayBlue.innerText)
  pannel.backgroundColor = rgbToHex(displayRed.innerText, displayGreen.innerText, displayBlue.innerText)
})

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}