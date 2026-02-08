function getNumbers() {
  let num1 = Number(document.getElementById('first-number').value);
  let num2 = Number(document.getElementById('second-number').value);
  return [num1, num2];
}

function displayResult(result) {
  let output = document.getElementById('output');
  output.innerHTML = String(result);

  if (result < 0) {
    output.style.color = 'red';
  } else {
    output.style.color = '#4a2c1d';
  }
}

function addition() {
  let [a, b] = getNumbers();
  displayResult(a + b);
}

function subtraction() {
  let [a, b] = getNumbers();
  displayResult(a - b);
}

function multiplication() {
  let [a, b] = getNumbers();
  displayResult(a * b);
}

function division() {
  let [a, b] = getNumbers();
  displayResult(a / b);
}

function power() {
  let [base, exp] = getNumbers();
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= base;
  }

  displayResult(result);
}

function clearCalc() {
  document.getElementById('first-number').value = '';
  document.getElementById('second-number').value = '';
  document.getElementById('output').innerHTML = '';
}
