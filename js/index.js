import { ButtonClick } from "./controls.js";
import { Timer } from "./timer.js";
import Sound from "./sounds.js";

const sound = Sound();
export let minutes = Number(Timer.minutesDisplay.textContent);
let minutesDisplay;
let currentMinutesText;
let currentMinutesNumber;
let newMinutesNumber;

ButtonClick.buttonPlay.onclick = function () {
  ButtonClick.play();
  sound.buttonPress();

  Timer.countdown();
};
ButtonClick.buttonPause.onclick = function () {
  ButtonClick.pause();
  sound.buttonPress();

  clearTimeout(Timer.timerTimeOut);
};
ButtonClick.buttonStop.onclick = function () {
  ButtonClick.resetControls();
  Timer.resetTimer();
  sound.buttonPress();
};
ButtonClick.buttonForestSound.onclick = function () {
  ButtonClick.ForestSound();
  sound.toggleBgForest();
};
ButtonClick.buttonRainSound.onclick = function () {
  ButtonClick.RainSound();
  sound.toggleBgRain();
};
ButtonClick.buttonCoffeeSound.onclick = function () {
  ButtonClick.CoffeeSound();
  sound.toggleBgCoffee();
};
ButtonClick.buttonFireSound.onclick = function () {
  ButtonClick.FireSound();
  sound.toggleBgFire();
};
ButtonClick.buttonPlus.onclick = function () {
  minutesDisplay = Timer.minutesDisplay;
  currentMinutesText = minutesDisplay.textContent;
  currentMinutesNumber = parseInt(currentMinutesText, 10);
  newMinutesNumber = currentMinutesNumber + 5;
  minutes = newMinutesNumber;
  Timer.updateTimerDisplay(newMinutesNumber);
  sound.buttonPress();
};
ButtonClick.buttonMinus.onclick = function () {
  minutesDisplay = Timer.minutesDisplay;
  currentMinutesText = minutesDisplay.textContent;
  currentMinutesNumber = parseInt(currentMinutesText, 10);
  newMinutesNumber = currentMinutesNumber - 5;
  minutes = newMinutesNumber;
  Timer.updateTimerDisplay(newMinutesNumber);
  sound.buttonPress();
};
