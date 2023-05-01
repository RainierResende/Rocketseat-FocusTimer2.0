import { ButtonClick } from "./controls.js";
import { minutes } from "./index.js";
import Sounds from "./sounds.js";

export const Timer = {
  minutesDisplay: document.querySelector(".minutes"),
  secondsDisplay: document.querySelector(".seconds"),
  updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    Timer.minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    Timer.secondsDisplay.textContent = String(seconds).padStart(2, "0");
  },
  resetTimer() {
    Timer.updateTimerDisplay(minutes, 0);

    clearTimeout(Timer.timerTimeOut);
  },
  countdown() {
    Timer.timerTimeOut = setTimeout(function () {
      let seconds = Number(Timer.secondsDisplay.textContent);
      let minutes = Number(Timer.minutesDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        ButtonClick.resetControls();
        Timer.updateTimerDisplay();

        Sounds().timerEnd();

        return;
      }

      if (seconds <= 0) {
        seconds = 60;

        --minutes;
      }

      Timer.updateTimerDisplay(minutes, seconds - 1);

      Timer.countdown();
    }, 1000);
  },
};
