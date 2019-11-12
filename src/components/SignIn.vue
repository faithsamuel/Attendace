<template>
  <div class="container is-fullheight">
    <form class="box column is-3">
      <h1 class="title has-text-centered">Login Page</h1>
      <b-field label="Email">
        <b-input
          type="email"
          v-model="email"
          placeholder="Please enter your email"
          maxlength="30"
        ></b-input>
      </b-field>

      <b-field label="Password">
        <b-input
          v-model="password"
          type="password"
          placeholder="enter your password"
          maxlength="30"
        ></b-input>
      </b-field>
      <b-button
        :loading="submitting"
        class="button is-info is-centered"
        @click.prevent="submitForm"
      >Sign in for today</b-button>
    </form>
    <!-- <div>
      <h1 style="font-size:3rem">{{breakDuration}}</h1>
      <b-button @click="startCount">Start</b-button>&nbsp;
      <b-button @click="stopCount">Stop</b-button>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      submitting: false,
      currentTime: null,
      startTime: null,
      requestId: null
    }
  },

  computed: {
    breakDuration() {
      if (!this.currentTime) {
        return `00:00:00`
      }
      const pad = v => `${v < 10 ? '0' : ''}${v}` // returns 01 instead of 1

      let timeDifferenceInMilliseconds = this.currentTime - this.startTime
      let oneSecondInMilliseconds = 1000
      let oneMinuteInMilliseconds = 60 * oneSecondInMilliseconds // 60 seconds make one minute
      let oneHourInMilliseconds = 60 * oneMinuteInMilliseconds //60 minutes make on second

      // modulo n gives a number from 0 to n-1

      let secs =
        Math.floor(timeDifferenceInMilliseconds / oneSecondInMilliseconds) % 60
      let mins =
        Math.floor(timeDifferenceInMilliseconds / oneMinuteInMilliseconds) % 60
      let hrs =
        Math.floor(timeDifferenceInMilliseconds / oneHourInMilliseconds) % 24

      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
    }
  },
  methods: {
    showMessage(type, message) {
      this.$buefy.toast.open({
        duration: 2000,
        message,
        position: 'is-bottom',
        type
      })
    },
    submitForm() {
      let message, type
      this.submitting = true
      this.$store
        .dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
        .then(profile => {
          this.showMessage('is-success', `Welcome back ${profile.name}`)
          // got to home page
        })
        .catch(e => {
          this.showMessage('is-danger', e.message)
        })
        .finally(() => {
          this.submitting = false
        })
    },
    startCount() {
      this.startTime = Date.now()

      const step = () => {
        this.currentTime = Date.now()
        this.requestId = requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    },
    stopCount() {
      cancelAnimationFrame(this.requestId)
      this.startTime = null
      this.currentTime = null
    }
  }
}
</script>

<style></style>
