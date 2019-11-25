<template>
  <div class="main">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <b-icon icon="account" size="is-medium" type="is-primary"></b-icon>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Username(emailAddress)</b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <section>
        <b-tabs position="is-centered" class="block">
          <b-tab-item label="Home" icon="home">
            <div class="home-btns">
              <b-button type="is-primary" @click="takeBreak">Take a break</b-button>
              <!-- <br /> -->
              <b-button type="is-danger" @click="endDay">Leave for the day</b-button>
            </div>
          </b-tab-item>
          <b-tab-item label="Tasks" icon="clipboard-check">
            <Tasks />
          </b-tab-item>
          <b-tab-item label="Daily Logs" icon="calendar-clock">
            <StaffLog />
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
import StaffLog from './StaffLog.vue'
import Tasks from './Tasks.vue'
export default {
  name: 'StaffTodo',
  components: {
    StaffLog,
    Tasks
  },
  data() {
    return {
      time: '',
      onBreak: false,
      requestType: 'Take a break'
    }
  },
  methods: {
    takeBreak() {
      this.$router.push('/timer')
    },
    endDay() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
    showTimer(event) {
      if (event === this.timeout[0]) {
        this.onBreak = true
      } else {
        this.onBreak = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.staff {
  padding: 1rem 2rem;
}
ul {
  li {
    list-style-type: none;
  }
}

.home-btns {
  display: flex;
  flex-direction: column;
  > * {
    margin-top: 2em;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 5em 0;
    justify-content: center;
    > * {
      margin: 0 1em;
    }
  }
}
</style>
