<template>
  <div class="container">
    <form class="staff box column is-3">
      <p class="subtitle has-text-left">User name</p>
      <hr />
      <h5 class="title is-5">Welcome</h5>
      <b-field>
        <b-select @input="showTimer($event)" placeholder="Take a break" rounded>
          <option v-for="time in timeout" :key="time" :value="time">{{time}}</option>
        </b-select>
      </b-field>
      <div class="timer" v-if="onBreak">
        <Timer />
      </div>
      <div class="Task" v-show="!onBreak">
        <b-field>
          <b-input placeholder="Enter a task" v-model="tasks.task"></b-input>
          <p class="control">
            <button class="button is-info" @click.prevent="addTask(tasks.task)">Add Task</button>
          </p>
        </b-field>
        <div class="content">
          <ul class="has-text-left">
            <li v-for="task in tasks" :key="task">
              <input type="checkbox" v-model="tasks.done" />
              {{task.task}}
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Timer from './Timer.vue'
export default {
  name: 'StaffTodo',
  components: {
    Timer
  },
  data() {
    return {
      time: '',
      timeout: ['Take a break', 'Done for today'],
      onBreak: false,
      requestType: 'Take a break',
      tasks: []
    }
  },
  methods: {
    showTimer(event) {
      // console.log(this.timeout[0])
      // console.log(event)

      if (event === this.timeout[0]) {
        this.onBreak = true
      } else {
        this.onBreak = false
      }
    },
    addTask(task) {
      this.tasks.push({ task, done: false })
      this.tasks.task = ''
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
</style>
