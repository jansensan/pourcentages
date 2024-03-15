let form;

let personalRecordInput;
let barWeightInput;
let percentageInput;

let submitButton;

let results;
let percentageVal;
let weightVal;
let weightPerSideVal;
let totalWeightVal;

let reinitButton;


// auto initialization
init();


// methods definitions
function init() {
  // dom elements - form
  form = document.getElementById('form');
  personalRecordInput = document.getElementById('personalRecord');
  barWeightInput = document.getElementById('barWeight');
  percentageInput = document.getElementById('percentage');
  submitButton = document.getElementById('submitButton');

  // dom elements - results section
  results = document.getElementById('results');
  percentageVal = document.getElementById('percentageVal');
  weightVal = document.getElementById('weightVal');
  weightPerSideVal = document.getElementById('weightPerSideVal');
  totalWeightVal = document.getElementById('totalWeightVal');
  reinitButton = document.getElementById('reinitButton');

  // add event listeners
  form.addEventListener('submit', onFormSubmit);
  reinitButton.addEventListener('click', onReinit);
}

function onFormSubmit(event) {
  event.preventDefault();

  // TODO: validation

  // get values from input fields
  const personalRecord = parseFloat(personalRecordInput.value);
  const barWeight = parseFloat(barWeightInput.value);
  const percentage = parseFloat(percentageInput.value);

  // derive values from fields
  const prAtPercentage = personalRecord * (percentage / 100);
  const prAtPercMinusBar = prAtPercentage - barWeight;
  const weightPerSide = prAtPercMinusBar / 2;

  // update results section
  percentageVal.innerText = `${ percentage }%`;
  weightVal.innerText = personalRecord.toFixed(2);
  weightPerSideVal.innerText = weightPerSide.toFixed(2);
  totalWeightVal.innerText = prAtPercentage.toFixed(2);

  // show results section
  results.classList.add('visible');
}

function onReinit() {
  // hide results section
  results.classList.remove('visible');

  // reset values
  barWeightInput.value = 45;
  percentageInput.value = 100;
}