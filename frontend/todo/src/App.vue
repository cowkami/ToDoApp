<script setup lang="ts">
import { reactive } from "vue";
import { ToDoList, newToDoList, addToDo } from "./modules/todo";
import ToDo from "./components/ToDo.vue";

const todoList = reactive<ToDoList>(newToDoList());
addToDo(todoList);
</script>

<template>
  <v-app class="full-height">
    <div class="full-height">
      <v-app-bar elevation="0" style="width: 100%" color="primary" app>
        <v-app-bar-title>ToDo</v-app-bar-title>
        <v-btn icon elevation="3" @click="addToDo(todoList)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main app>
        <v-card style="height: 100%">
          <v-item-list v-for="(todo, index) in todoList" v-bind:index="index">
            <template v-if="!todo.deleted">
              <ToDo v-bind:index="index" v-bind:todo="todo" />
            </template>
          </v-item-list>
        </v-card>
      </v-main>
      <v-footer style="width: 100%" color="primary" padless bottom fixed app>
        2022 cowkami
      </v-footer>
    </div>
  </v-app>
</template>

<style>
.full-height {
  height: 100%;
}
</style>
