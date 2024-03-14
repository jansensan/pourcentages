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
  // get dom elements
  form = document.getElementById('form');
  personalRecordInput = document.getElementById('personalRecord');
  barWeightInput = document.getElementById('barWeight');
  percentageInput = document.getElementById('percentage');
  submitButton = document.getElementById('submitButton');

  results = document.getElementById('results');
  percentageVal = document.getElementById('percentageVal');
  weightVal = document.getElementById('weightVal');
  weightPerSideVal = document.getElementById('weightPerSideVal');
  totalWeightVal = document.getElementById('totalWeightVal');
  reinitButton = document.getElementById('reinitButton');

  form.addEventListener('submit', onFormSubmit);
  reinitButton.addEventListener('click', onReinit);
}

function onFormSubmit(event) {
  event.preventDefault();

  // TODO: validation

  const personalRecord = parseFloat(personalRecordInput.value);
  const barWeight = parseFloat(barWeightInput.value);
  const percentage = parseFloat(percentageInput.value);

  const prAtPercentage = personalRecord * (percentage / 100);
  const prAtPercMinusBar = prAtPercentage - barWeight;
  const weightPerSide = prAtPercMinusBar / 2;

  percentageVal.innerText = `${ percentage }%`;
  weightVal.innerText = personalRecord.toFixed(2);
  weightPerSideVal.innerText = weightPerSide.toFixed(2);
  totalWeightVal.innerText = prAtPercentage.toFixed(2);

  results.classList.add('visible');
}

function onReinit() {
  results.classList.remove('visible');

  personalRecordInput.value = '';
  barWeightInput.value = 45;
  percentageInput.value = 100;
}