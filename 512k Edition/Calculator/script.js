let currentValue = '';
let displayValue = '';
let darkMode = false;
let secretTheme = false;

function appendValue(value) {
  currentValue += value;
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentValue);
    displayValue = result;
    currentValue = result;
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    currentValue = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function toggleTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-theme');
  darkMode = !darkMode;
}

function toggleSecretTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('secret-theme');
  secretTheme = !secretTheme;
}

function openConfigPanel() {
  const configPanel = document.getElementById('configPanel');
  configPanel.style.display = 'block';
}

function selectMode(mode) {
  const body = document.querySelector('body');
  const configPanel = document.getElementById('configPanel');
  configPanel.style.display = 'none';

  switch (mode) {
    case 'night':
      body.classList.add('dark-theme');
      body.classList.remove('old-ios-theme');
      break;
    case 'old-ios':
      body.classList.add('old-ios-theme');
      body.classList.remove('dark-theme');
      break;
    case 'default':
      body.classList.remove('dark-theme', 'old-ios-theme');
      break;
    default:
      break;
  }
}
