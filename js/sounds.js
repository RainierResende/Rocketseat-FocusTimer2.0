export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgForestAudio = new Audio("./audio/forest.wav");
  const bgRainAudio = new Audio("./audio/rain.wav");
  const bgCoffeeAudio = new Audio("./audio/coffee.wav");
  const bgFireAudio = new Audio("./audio/fire.wav");

  let audioPlaying;

function toggleBgForest() {
  if (audioPlaying === bgForestAudio) {
    bgForestAudio.pause();
    audioPlaying = undefined;
  } else {
    if (audioPlaying) {
      audioPlaying.pause();
    }
    bgForestAudio.play();
    audioPlaying = bgForestAudio;
  }
 
  bgRainAudio.pause();
  bgCoffeeAudio.pause();
  bgFireAudio.pause();
}

function toggleBgRain() {
  if (audioPlaying === bgRainAudio) {
    bgRainAudio.pause();
    audioPlaying = undefined;
  } else {
    if (audioPlaying) {
      audioPlaying.pause();
    }
    bgRainAudio.play();
    audioPlaying = bgRainAudio;
  }
  
  bgForestAudio.pause();
  bgCoffeeAudio.pause();
  bgFireAudio.pause();
}

function toggleBgCoffee() {
  if (audioPlaying === bgCoffeeAudio) {
    bgCoffeeAudio.pause();
    audioPlaying = undefined;
  } else {
    if (audioPlaying) {
      audioPlaying.pause();
    }
    bgCoffeeAudio.play();
    audioPlaying = bgCoffeeAudio;
  }
  
  bgForestAudio.pause();
  bgRainAudio.pause();
  bgFireAudio.pause();
}

function toggleBgFire() {
  if (audioPlaying === bgFireAudio) {
    bgFireAudio.pause();
    audioPlaying = undefined;
  } else {
    if (audioPlaying) {
      audioPlaying.pause();
    }
    bgFireAudio.play();
    audioPlaying = bgFireAudio;
  }
  
  bgForestAudio.pause();
  bgRainAudio.pause();
  bgCoffeeAudio.pause();
}


  function buttonPress() {
    buttonPressAudio.play();
  }

  function timerEnd() {
    kitchenTimer.play();
  }

  return {
    buttonPress,
    timerEnd,
    toggleBgForest,
    toggleBgRain,
    toggleBgCoffee,
    toggleBgFire,
  };
}
