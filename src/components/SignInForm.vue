<template>
  <form @submit.prevent="login" autocomplete="false">
    <h4 class="subtitle has-text-centered">Welcome</h4>
    <div class="action">
      <button class="button is-primary" type="submit">Log in with microsoft</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
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
    login() {
      this.submitting = true
      this.$store
        .dispatch('auth/login')
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
</script>

<style>
.action {
  display: flex;
  justify-content: center;
}
</style>
