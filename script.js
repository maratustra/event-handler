'use strict';

// 1.

const button = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
let color;

const getColorName = function (event) {

  color = event.target.value;
  return color;
};

const changeColor = function () {

  square.style.backgroundColor = color;
};

input.addEventListener('input', getColorName);
button.addEventListener('click', changeColor);

// 2. 

const btn = document.getElementById('e_btn');

btn.style.display = 'none';

// 3. 

const range = document.getElementById('range');
let rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');

range.addEventListener('input', function (event) {

  rangeSpan.textContent = event.target.value + '%';
  circle.style.height = event.target.value + '%';
  circle.style.width = event.target.value + '%';
});


