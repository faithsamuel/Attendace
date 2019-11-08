<template>
  <div class="container">
    <form class="box column is-3">
      <p class="subtitle has-text-left">User name</p>
      <hr />
      <h5 class="title is-5">Welcome Username</h5>
      <b-field>
        <b-select placeholder="Take a break" rounded>
          <option value="flint">Take a break</option>
          <option value="silver">Done for Today</option>
        </b-select>
      </b-field>

      <b-field>
        <b-input placeholder="Enter a task"></b-input>
        <p class="control">
          <button class="button is-info">Add Task</button>
        </p>
      </b-field>
      <div class="content">
        <ul class="has-text-left">
          <li>
            <input type="checkbox" />
            Task 1
          </li>
          <li>
            <input type="checkbox" />
            Task 2
          </li>
          <li>
            <input type="checkbox" />
            Task 3
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script></script>

<style></style>
