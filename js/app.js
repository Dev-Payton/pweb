function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function handleInput(event) {
  let inputElement = document.getElementById('userInput');
  let inputValue = inputElement.value;
  console.log(inputValue);
  document.getElementById('current-location').innerHTML = inputValue;
}
