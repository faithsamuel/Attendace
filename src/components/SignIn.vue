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
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      submitting: false
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
        })
        .catch(e => {
          this.showMessage('is-danger', e.message)
        })
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style></style>
