<template>
  <div>
    <div class="container">
      <div class="display-timer">
        <h6 class="timer-title">Break Time!</h6>
        {{time}}
        <!-- {{hours}}:{{minutes}}:{{seconds}} -->
        <!-- <button @click="startTimer">Start</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      state: 'started',
      startTime: Date.now(),
      currentTime: Date.now(),
      interval: null,
      breakTime: true
    }
  },
  mounted() {
    this.interval = setInterval(this.updateCurrentTime, 1000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  computed: {
    time() {
      return this.hours + ':' + this.minutes + ':' + this.seconds
    },
    milliseconds() {
      return this.currentTime - this.$data.startTime
    },
    hours() {
      var lapsed = this.milliseconds
      var hrs = Math.floor(lapsed / 1000 / 60 / 60)
      if (hrs == 1) {
        // this.breakText
        clearInterval(this.interval)
      }
      return hrs >= 10 ? hrs : '0' + hrs
    },
    minutes() {
      var lapsed = this.milliseconds
      var min = Math.floor((lapsed / 1000 / 60) % 60)
      return min >= 10 ? min : '0' + min
    },
    seconds() {
      var lapsed = this.milliseconds
      var sec = Math.ceil((lapsed / 1000) % 60)
      return sec >= 10 ? sec : '0' + sec
    },
    breakText() {
      return "Break's over for today"
    }
  },
  methods: {
    reset() {
      this.$data.state = 'started'
      this.$data.startTime = Date.now()
      this.$data.currentTime = Date.now()
    },
    pause() {
      this.$data.state = 'paused'
    },
    resume() {
      this.$data.state = 'started'
    },
    updateCurrentTime: function() {
      if (this.$data.state == 'started') {
        this.currentTime = Date.now()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.display-timer {
  font-size: 2rem;
  height: 120px;
  background: linear-gradient(#fdfdfd, #e3e5f5);
  box-shadow: 0 6px 7px rgba(5, 5, 5, 0.02), 3px 4px 15px 3px rgba(7, 7, 7, 0.03);
  border-radius: 10% 30% 50% 70%;

  .timer-title {
    font-size: 1rem;
  }
}
</style>