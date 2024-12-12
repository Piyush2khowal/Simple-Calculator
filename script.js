let screen = document.getElementById("screen");

//append value to the display screen
function appendToScreen(value) {
  screen.value += value;
}
// clear the screen
function clearScreen() {
  screen.value = "";
}
//evaluate the expression and display the screen
function calculateResult() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}
