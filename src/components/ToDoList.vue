<template>
  <div class="app">
    <h2>To-Do List</h2>
    <label> Your tasks: {{ isComplete }} / {{ totalItems }}</label>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add New Task">
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="(task, taskIndex) in tasks" :key="taskIndex" :class="{ completed: task.completed, canceled: task.canceled }">
        <div class="task">
          <span>{{ task.text }}</span>
          <span class="date">{{ task.date }}</span>
          <button @click="editTask(taskIndex)">Edit</button>
          <button @click="completeTask(taskIndex)">Complete</button>
          <button @click="cancelTask(taskIndex)">Cancel</button>
          <button @click="deleteTask(taskIndex)">Delete</button>
        </div>
        <form v-if="task.editing" @submit.prevent="saveTask(taskIndex)">
          <input type="text" v-model="task.text" placeholder="Edit Task">
          <button type="submit">Save</button>
          <button @click="cancelEditTask(taskIndex)">Cancel</button>
        </form>
        <ul>
          <li v-for="(subtask, subtaskIndex) in task.subtasks" :key="subtaskIndex" :class="{ completed: subtask.completed, canceled: subtask.canceled }">
            <div class="subtask">
              <span>{{ subtask.text }}</span>
              <button @click="editSubtask(taskIndex, subtaskIndex)">Edit</button>
              <button @click="completeSubtask(taskIndex, subtaskIndex)">Complete</button>
              <button @click="cancelSubtask(taskIndex, subtaskIndex)">Cancel</button>
              <button @click="deleteSubtask(taskIndex, subtaskIndex)">Delete</button>
            </div>
            <form v-if="subtask.editing" @submit.prevent="saveSubtask(taskIndex, subtaskIndex)">
              <input type="text" v-model="subtask.text" placeholder="Edit Subtask">
              <button type="submit">Save</button>
              <button @click="cancelEditSubtask(taskIndex, subtaskIndex)">Cancel</button>
            </form>
          </li>
        </ul>
        <form @submit.prevent="addSubtask(taskIndex)">
          <input type="text" v-model="newSubtask" placeholder="Add New Subtask">
          <button type="submit">Add Subtask</button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: '',
      newSubtask: ''
    }
  },
  computed: {
    totalItems() {
      return this.tasks.length; 
    },
    isComplete() {
      return this.tasks.filter(task => task.completed).length; 
    }
  },
  methods: {
    addTask() {
      if (this.newTask !== '') {
        const now = new Date()
      const dateString = `${now.toLocaleDateString()}`
        this.tasks.push({
          text: this.newTask,
          completed: false,
          canceled: false,
          editing: false,
          date: dateString,
          subtasks: []
        });
        this.newTask = '';
      }
    },
    editTask(index) {
      this.tasks[index].editing = true;
    },
    saveTask(index) {
      if (this.tasks[index].text !== '') {
        this.tasks[index].editing = false;
      }
    },
    cancelEditTask(index) {
      this.tasks[index].editing = false;
    },
    completeTask(index) {
      this.tasks[index].completed = true;
    },
    cancelTask(index) {
      this.tasks[index].canceled = true;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addSubtask(taskIndex) {
      if (this.newSubtask !== '') {
        this.tasks[taskIndex].subtasks.push({
          text: this.newSubtask,
          completed: false,
          canceled: false,
          editing: false
        });
        this.newSubtask = '';
      }
    },
    editSubtask(taskIndex, subtaskIndex) {
      this.tasks[taskIndex].subtasks[subtaskIndex].editing = true;
    },
    saveSubtask(taskIndex, subtaskIndex) {
      if (this.tasks[taskIndex].subtasks[subtaskIndex].text !== '') {
        this.tasks[taskIndex].subtasks[subtaskIndex].editing = false;
      }
    },
    cancelEditSubtask(taskIndex, subtaskIndex) {
      this.tasks[taskIndex].subtasks[subtaskIndex].editing = false;
    },
    completeSubtask(taskIndex, subtaskIndex) {
      this.tasks[taskIndex].subtasks[subtaskIndex].completed = true;
    },
    cancelSubtask(taskIndex, subtaskIndex) {
      this.tasks[taskIndex].subtasks[subtaskIndex].canceled = true;
    },
    deleteSubtask(taskIndex, subtaskIndex) {
      this.tasks[taskIndex].subtasks.splice(subtaskIndex, 1);
    },
    
  }
}
</script>

<style lang="scss">
  @import "../main.scss";
  </style>