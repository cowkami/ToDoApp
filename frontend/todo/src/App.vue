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
  <v-app class="full-height">
    <v-app-bar color="primary" app>
      <v-app-bar-title>ToDo</v-app-bar-title>
      <v-btn icon elevation="3" @click="newToDo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main app>
      <v-container style="max-width: 100% max-height: 100% height: 100%">
        hello
      </v-container>
    </v-main>

    <v-footer
      style="width: 100% max-height: 10%"
      color="primary"
      padless
      bottom
      app
    >
      2022 Cowkami
    </v-footer>
  </v-app>
</template>

<style>
.full-height {
  height: 100%;
}
</style>
