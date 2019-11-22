<template>
  <div class="form-container">
    <SignInForm class="form box" />
  </div>
</template>

<script>
import SignInForm from '@/components/SignInForm'
export default {
  components: { SignInForm }
}
</script>

<style scoped lang="scss">
.form-container {
  background-image: url(../img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  position: relative;
  display: grid;
  place-items: center;
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(to right, rgba(54, 40, 114, 0.479), rgba(110, 78, 255, 0.884));
}
.form {
  max-width: 50em;
}
</style>
