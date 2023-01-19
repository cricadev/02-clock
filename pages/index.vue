<template>
  <div>
    <Title>Pomodoro</Title>
    <ColorModePicker />

    <h1 class="text-3xl font-bold text-center text-intro">Pomodoro Timer</h1>
    <label for="clock-select">Select your type of clock</label>
    <select
      name="clock_type"
      class="select-clock"
      id="clock-select"
      v-model="clock"
      @change="pausePomodoros"
    >
      <option value="pomodoro">Pomodoro</option>
      <option value="short">Short Break</option>
      <option value="long">Long Break</option>
      <option value="analog">Analog</option>
      <option value="digital">Digital</option>
    </select>
    <div class="clock" v-if="clock === 'analog'">
      <div class="clock-face"></div>
      <div class="hand hour-hand"></div>
      <div class="hand min-hand"></div>
      <div class="hand second-hand"></div>
    </div>
    <div class="clock" v-if="clock === 'digital'">
      <h1 class="hourText hour-text"></h1>
    </div>

    <div class="clock" v-if="clock === 'pomodoro'">
      <p class="hour-text">
        {{ minutes }} :
        {{ seconds < 10 ? `0${seconds}` : seconds }}
      </p>
      <div class="flex items-center gap-2">
        <button @click="audioPlay" class="btn" v-if="!isRunning">
          <Icon name="material-symbols:play-arrow" class="icon-btn" />
        </button>
        <button @click="audioPause" class="btn" v-else>
          <Icon name="material-symbols:pause-outline" class="icon-btn"></Icon>
        </button>
        <button @click="audioStop" class="btn">
          <Icon name="material-symbols:stop" class="icon-btn"></Icon>
        </button>
      </div>
    </div>
    <div class="clock" v-if="clock === 'short'">
      <p class="hour-text">
        {{ minutesShort }} :
        {{ secondsShort < 10 ? `0${secondsShort}` : secondsShort }}
      </p>
      <div class="flex items-center gap-2">
        <button @click="audioPlayShort" class="btn" v-if="!isRunningShort">
          <Icon name="material-symbols:play-arrow" class="icon-btn" />
        </button>
        <button @click="audioPauseShort" class="btn" v-else>
          <Icon name="material-symbols:pause-outline" class="icon-btn"></Icon>
        </button>
        <button @click="audioStopShort" class="btn">
          <Icon name="material-symbols:stop" class="icon-btn"></Icon>
        </button>
      </div>
    </div>
    <div class="clock" v-if="clock === 'long'">
      <p class="hour-text">
        {{ minutesLong }} :
        {{ secondsLong < 10 ? `0${secondsLong}` : secondsLong }}
      </p>
      <div class="flex items-center gap-2">
        <button @click="audioPlayLong" class="btn" v-if="!isRunningLong">
          <Icon name="material-symbols:play-arrow" class="icon-btn" />
        </button>
        <button @click="audioPauseLong" class="btn" v-else>
          <Icon name="material-symbols:pause-outline" class="icon-btn"></Icon>
        </button>
        <button @click="audioStopLong" class="btn">
          <Icon name="material-symbols:stop" class="icon-btn"></Icon>
        </button>
      </div>
    </div>
    <footer
      class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg special-thanks"
    >
      <div class="inline-flex items-center gap-2">
        <span>Made with love by <strong>CricaDev</strong> </span>
        <img src="../public/icon.png" alt="" class="w-8 h-8" />
      </div>
      <p>
        This is the second project from
        <strong>Nuxt.js - 30 day challenge</strong>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import play from "../assets/sounds/play.mp3";
import pause from "../assets/sounds/pause.mp3";
import stopp from "../assets/sounds/stop.mp3";
import { useTimer } from "../composables/useClock";
import { onMounted, onUpdated } from "vue";
const clock = ref("pomodoro");
const colorMode = useColorMode();
const { minutes, seconds, isRunning, startTimer, stopTimer, pauseTimer } =
  useTimer(25, 0);

const {
  minutes: minutesShort,
  seconds: secondsShort,
  isRunning: isRunningShort,
  startTimer: startTimerShort,
  stopTimer: stopTimerShort,
  pauseTimer: pauseTimerShort,
} = useTimer(5, 0);
const {
  minutes: minutesLong,
  seconds: secondsLong,
  isRunning: isRunningLong,
  startTimer: startTimerLong,
  stopTimer: stopTimerLong,
  pauseTimer: pauseTimerLong,
} = useTimer(15, 0);
const audioPlay = () => {
  const audio = new Audio(play);
  if (!isRunning.value) {
    audio.play();
  }
  startTimer();
};
const audioPause = () => {
  const audio = new Audio(pause);
  if (isRunning.value) {
    audio.play();
  }
  pauseTimer();
};
const audioStop = () => {
  const audio = new Audio(stopp);
  if (isRunning.value) {
    audio.play();
  }
  stopTimer();
};

const audioPlayShort = () => {
  const audio = new Audio(play);
  if (!isRunningShort.value) {
    audio.play();
  }
  startTimerShort();
};

const audioPauseShort = () => {
  const audio = new Audio(pause);
  if (isRunningShort.value) {
    audio.play();
  }
  pauseTimerShort();
};

const audioStopShort = () => {
  const audio = new Audio(stopp);
  if (isRunningShort.value) {
    audio.play();
  }
  stopTimerShort();
};

const audioPlayLong = () => {
  const audio = new Audio(play);
  if (!isRunningLong.value) {
    audio.play();
  }
  startTimerLong();
};

const audioPauseLong = () => {
  const audio = new Audio(pause);
  if (isRunningLong.value) {
    audio.play();
  }
  pauseTimerLong();
};

const audioStopLong = () => {
  const audio = new Audio(stopp);
  if (isRunningLong.value) {
    audio.play();
  }
  stopTimerLong();
};

const pausePomodoros = () => {
  if (isRunning.value) {
    pauseTimer();
  }
  if (isRunningShort.value) {
    pauseTimerShort();
  }
  if (isRunningLong.value) {
    pauseTimerLong();
  }
};
onUpdated(() => {
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
  const hourText = document.querySelector(".hourText");
  if (clock.value === "analog") {
    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      const hours = now.getHours();
      const hoursDegrees = (hours / 12) * 360;
      hourHand.style.transform = `rotate(${hoursDegrees}deg) scale(0.8)`;
      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + 90;
      minHand.style.transform = `rotate(${minsDegrees}deg)`;
      if (hours >= 12) {
        hourText.textContent = `${
          now.getHours() - 12
        }:${now.getMinutes()}:${now.getSeconds()} PM`;
      } else {
        hourText.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} AM`;
      }
    }

    setInterval(setDate, 1000);
  } else if (clock.value === "digital") {
    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const hours = now.getHours();
      const mins = now.getMinutes();
      if (hours > 12) {
        hourText.textContent = `${now.getHours() - 12}:${now.getMinutes()}:${
          now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()
        } PM`;
      } else {
        hourText.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} AM`;
      }
    }

    setInterval(setDate, 1000);
  }
});
</script>

<style scoped lang="scss">
html {
  background: #018ded;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 10px;
}

.clock {
  display: grid;
  place-items: center;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  border: 20px solid white;
  margin: 10rem auto;
  position: relative;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}
.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /*accountfor the height of the clock hands*/
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;

  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.second-hand {
  height: 3px;
  background: red;
}
.hour-hand {
  height: 8px;
}
.min-hand {
  height: 8px;
}
</style>
