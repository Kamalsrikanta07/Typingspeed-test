// script.js

// Elements
const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const startButton = document.getElementById('start-button');
const speedDisplay = document.getElementById('speed');
const accuracyDisplay = document.getElementById('accuracy');

// Variables
let startTime, timerInterval;
let givenText = "The quick brown fox jumps over the lazy dog.";
let totalWords = givenText.split(" ").length;

// Display the given text
textDisplay.textContent = givenText;

// Start Test Functionality
startButton.addEventListener('click', () => {
  // Reset
  textInput.disabled = false;
  textInput.value = "";
  textInput.focus();
  speedDisplay.textContent = "0";
  accuracyDisplay.textContent = "0";

  // Start Timer
  startTime = new Date();
  timerInterval = setInterval(updateStats, 100);

  // Enable typing
  textDisplay.textContent = givenText;
});

// Update Stats
function updateStats() {
  let elapsedTime = (new Date() - startTime) / 1000 / 60; // Time in minutes
  let typedText = textInput.value;
  let typedWords = typedText.split(" ").filter(word => word.length > 0).length;

  // Calculate Speed (WPM)
  let speed = Math.floor(typedWords / elapsedTime);
  speedDisplay.textContent = speed;

  // Calculate Accuracy
  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === givenText[i]) correctChars++;
  }
  let accuracy = Math.floor((correctChars / givenText.length) * 100);
  accuracyDisplay.textContent = accuracy;

  // Stop Timer if Completed
  if (typedText === givenText) {
    clearInterval(timerInterval);
    textInput.disabled = true;
  }
}
