<script setup lang="ts">
import { reactive } from "vue";

interface ToDo {
  description: string;
  done: boolean;
}

interface ToDoList {
  list: ToDo[];
}

const todoModel = reactive<ToDoList>({ list: [] });

const newToDo = () => {
  const todo: ToDo = {
    description: "new todo",
    done: false,
  };
  todoModel.list.push(todo);
};
</script>

<template>
  <v-app>
    <v-app-bar color="prymary">
      <v-toolbar-title>ToDo</v-toolbar-title>
      <v-btn text elevation="3" @click="newToDo">new</v-btn>
    </v-app-bar>
    <v-main>
      <ul>
        <li v-for="todo in todoModel.list">{{ todo.description }}</li>
      </ul>
    </v-main>
  </v-app>
</template>
