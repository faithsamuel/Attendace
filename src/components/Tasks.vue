<template>
  <div class="task-wrapper">
    <div class="Task">
      <b-field>
        <b-input placeholder="Enter a task" v-model="tasks.task"></b-input>
        <p class="control">
          <button
            class="button is-info"
            @click.prevent="addTask(tasks.task)"
          >Add Task</button>
        </p>
      </b-field>
      <div class="block">
        <b-radio name="name" native-value="All">All</b-radio>
        <b-radio name="name" native-value="Completed">Completed</b-radio>
        <b-radio name="name" native-value="Incompleted">Incompleted</b-radio>
      </div>
      <div class="content">
        <ul class="has-text-left">
          <li v-for="task in tasks" :key="task">
            <input type="checkbox" v-model="tasks.done" />
            {{ task.task }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({ task, done: false })
      this.tasks.task = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
