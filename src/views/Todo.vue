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
import { http_post, http_get } from "@/assets/http-handler.js";
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
      const res_data = await http_get("todos");
      if (res_data.status === "successful") {
        this.todolist = res_data.data;
      }
    },

    async addTodo() {
      const res_data = await http_post("todos", this.todo);
      if (res_data.status === "successful") {
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