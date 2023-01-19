import { ref, onMounted } from "vue";

export const useTimer = (minutesVal = 0, secondsVal = 0) => {
  const minutes = ref(minutesVal);
  const seconds = ref(secondsVal);
  const isRunning = ref(false);
  let interval: any;
  function startTimer() {
    if (!isRunning.value) {
      isRunning.value = true;
      interval = setInterval(() => {
        if (seconds.value === 0) {
          if (minutes.value === 0) {
            clearInterval(interval);
            isRunning.value = false;
          } else {
            minutes.value--;
            seconds.value = 59;
          }
        } else {
          seconds.value--;
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    if (isRunning.value) {
      isRunning.value = false;
      clearInterval(interval);
    }
  }

  function stopTimer() {
    if (isRunning.value) {
      isRunning.value = false;
      clearInterval(interval);
    }
    minutes.value = minutesVal;
    seconds.value = secondsVal;
  }

  return { minutes, seconds, isRunning, startTimer, pauseTimer, stopTimer };
};
export const useAudio = () => {
  const playAudio = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return { playAudio };
};
