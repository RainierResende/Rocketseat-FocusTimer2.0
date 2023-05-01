export const ButtonClick = {
  buttonPlay: document.querySelector(".play"),
  buttonPause: document.querySelector(".pause"),
  buttonStop: document.querySelector(".stop"),
  buttonPlus: document.querySelector(".plus"),
  buttonMinus: document.querySelector(".minus"),
  buttonForestSound: document.querySelector(".forestSound"),
  buttonRainSound: document.querySelector(".rainSound"),
  buttonCoffeeSound: document.querySelector(".coffeeSound"),
  buttonFireSound: document.querySelector(".fireSound"),

  play() {
    ButtonClick.buttonPlay.classList.toggle("hide");
    ButtonClick.buttonPause.classList.toggle("hide");
  },
  pause() {
    ButtonClick.buttonPlay.classList.toggle("hide");
    ButtonClick.buttonPause.classList.toggle("hide");
  },
  resetControls() {
    ButtonClick.buttonPlay.classList.remove("hide");
    ButtonClick.buttonPause.classList.add("hide");
  },

  ForestSound() {
    ButtonClick.buttonForestSound.classList.toggle("pressed");
    ButtonClick.buttonRainSound.classList.remove("pressed");
    ButtonClick.buttonCoffeeSound.classList.remove("pressed");
    ButtonClick.buttonFireSound.classList.remove("pressed");
  },
  RainSound() {
    ButtonClick.buttonRainSound.classList.toggle("pressed");
    ButtonClick.buttonForestSound.classList.remove("pressed");
    ButtonClick.buttonCoffeeSound.classList.remove("pressed");
    ButtonClick.buttonFireSound.classList.remove("pressed");
  },
  CoffeeSound() {
    ButtonClick.buttonCoffeeSound.classList.toggle("pressed");
    ButtonClick.buttonRainSound.classList.remove("pressed");
    ButtonClick.buttonForestSound.classList.remove("pressed");
    ButtonClick.buttonFireSound.classList.remove("pressed");
  },
  FireSound() {
    ButtonClick.buttonFireSound.classList.toggle("pressed");
    ButtonClick.buttonRainSound.classList.remove("pressed");
    ButtonClick.buttonCoffeeSound.classList.remove("pressed");
    ButtonClick.buttonForestSound.classList.remove("pressed");
  },
};
