<template>
  <form @submit.prevent="submitForm" autocomplete="false">
    <h4 class="subtitle has-text-centered">Login Page</h4>
    <b-field label="Email" label-position="on-border">
      <b-input type="email" v-model="email" placeholder="Please enter your email" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password" label-position="on-border">
      <b-input v-model="password" type="password" placeholder="enter your password" maxlength="30"></b-input>
    </b-field>
    <div class="action">
      <button
        :class="{ 'is-loading': submitting }"
        type="submit"
        class="button is-primary is-centered"
      >Sign in for today</button>
    </div>
  </form>
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
    validate() {
      return Boolean(this.email) && Boolean(this.password)
    },
    submitForm() {
      if (this.validate()) {
        this.submitting = true
        this.$store
          .dispatch('auth/login', {
            email: this.email,
            password: this.password
          })
          .then(profile => {
            this.showMessage('is-success', `Welcome back ${profile.name}`)
            this.$router.push({ name: 'home' })
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
}
</script>

<style>
.action {
  display: flex;
  justify-content: center;
}
</style>
