<template>
  <div class="list">
    <ul v-if="todoLen > 0">
      <li v-for="(todo, index) in todolist" :key="index">
        {{ todo.name }}
      </li>
    </ul>
    <p v-if="todoLen == 0">
      There seems to be no todo lists, add then at the bottom
    </p>
    <form @submit.prevent="addTodo">
      <div class="formitem">
        <label for="tname"><b>Name</b></label>
        <input
          name="tname"
          type="text"
          v-model="todo.name"
          placeholder="Enter Todo Name"
        />
      </div>

      <div class="formitem">
        <label for="pwd"><b>Type</b></label>
        <input
          type="text"
          v-model="todo.type"
          placeholder="Enter Todo Type"
          name="pwd"
        />
      </div>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todolist: [],
      todo: {
        name: "",
        type: "",
      },
    };
  },
  computed: {
    todoLen() {
      return this.todolist.length;
    },
  },
  methods: {
    async getTodos() {
      console.log("Fetching data");
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        "http://localhost:8000/todos",
        requestOptions
      );
      const data = await response.json();
      console.log(data.data);
      this.todolist = data.data;
    },

    async addTodo() {
      console.log("somethign todo adding");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.todo),
      };
      const response = await fetch(
        "http://localhost:8000/todos",
        requestOptions
      );
      const data = await response.json();
      if (data.status === "successful") {
        // this.$router.push('/todo')
        this.getTodos();
        
      }
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style>
</style>