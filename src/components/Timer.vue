<template>
  <div>
    <div class="container">
      <div class="display-timer">
        <h6 class="timer-title">Break Time!</h6>
        {{ breakDuration }}
        <!-- {{hours}}:{{minutes}}:{{seconds}} -->
        <!-- <button @click="startTimer">Start</button> -->
      </div>
      <div class="timer-btns">
        <b-button type="is-primary" @click="startCount">Start</b-button>&nbsp;
        <b-button type="is-danger" @click="stopCount">Stop</b-button>
      </div>

      <div class="options">
        <b-button type="is-primary" @click="endBreak">End Break</b-button>&nbsp;
        <b-button type="is-danger" @click="endDay">Close for today</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      currentTime: null,
      startTime: null,
      requestId: null,
      breakTime: true
    };
  },
  computed: {
    breakDuration() {
      if (!this.currentTime) {
        return `00:00:00`;
      }
      const pad = v => `${v < 10 ? "0" : ""}${v}`; // returns 01 instead of 1

      let timeDifferenceInMilliseconds = this.currentTime - this.startTime;
      let oneSecondInMilliseconds = 1000;
      let oneMinuteInMilliseconds = 60 * oneSecondInMilliseconds; // 60 seconds make one minute
      let oneHourInMilliseconds = 60 * oneMinuteInMilliseconds; //60 minutes make on second

      // modulo n gives a number from 0 to n-1

      let secs =
        Math.floor(timeDifferenceInMilliseconds / oneSecondInMilliseconds) % 60;
      let mins =
        Math.floor(timeDifferenceInMilliseconds / oneMinuteInMilliseconds) % 60;
      let hrs =
        Math.floor(timeDifferenceInMilliseconds / oneHourInMilliseconds) % 24;

      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
  },

  methods: {
    startCount() {
      this.startTime = Date.now();

      const step = () => {
        this.currentTime = Date.now();
        this.requestId = requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },
    stopCount() {
      cancelAnimationFrame(this.requestId);
      this.startTime = null;
      this.currentTime = null;
    },
    endBreak() {
      this.$router.push("/stafflog");
    },
    endDay() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.display-timer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(178, 104, 228);
  font-size: 2rem;
  height: 200px;
  width: 200px;
  border: 1px solid rgb(118, 62, 155);
  border-radius: 50%;
  // box-shadow: 0 6px 7px rgba(5, 5, 5, 0.02),
  //   3px 4px 15px 3px rgba(7, 7, 7, 0.03);
  margin-bottom: 20px;
  box-shadow: -1px -1px currentcolor, 1px 1px currentcolor,
    inset -1px 1px currentcolor, inset 1px -1px currentcolor;
  margin-top: 100px;

  .timer-title {
    font-size: 1rem;
  }
}

.options {
  margin-top: 20px;
}
// .display-timer::after {
//   position: absolute;
//   content: "";
//   width: 200px;
//   height: 200px;
//   left: 0;
//   top: -4px;
//   border: 1px solid rgb(118, 62, 155);
//   border-radius: 100%;
// }
</style>
