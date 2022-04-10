<script setup lang="ts">
import { reactive, ref } from "vue";
import { IToDo, ToDoList, newToDoList, addToDo } from "./modules/todo";
import ToDo from "./components/ToDo.vue";

const ViewMode = {
  All: "All",
  ToDo: "ToDo",
  Done: "Done",
} as const;

type ViewMode = typeof ViewMode[keyof typeof ViewMode];

const viewMode = ref<ViewMode>(ViewMode.ToDo);

function switchMode(target_mode: ViewMode) {
  viewMode.value = target_mode;
}

const viewModeOptions = Object.values(ViewMode);

function is_visible(todo: IToDo): boolean {
  let flag: boolean;
  switch (viewMode.value) {
    case ViewMode.All:
      flag = true;
      break;
    case ViewMode.ToDo:
      flag = !todo.done;
      break;
    case ViewMode.Done:
      flag = todo.done;
      break;
  }
  return !todo.deleted && flag;
}

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
          <v-item-list v-for="todo in todoList">
            <template v-if="is_visible(todo)">
              <ToDo v-bind:todo="todo" />
            </template>
          </v-item-list>
        </v-card>
      </v-main>
      <v-footer style="width: 100%" color="primary" padless bottom fixed app>
        <v-card
          elevation="0"
          rounded="0"
          color="primary"
          class="justify-center"
        >
          <v-card-text>
            {{ new Date().getFullYear() }} - <strong>Cowkami</strong>
          </v-card-text>
        </v-card>
        <v-spacer> </v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>
          <v-list elevation="5">
            <v-list-item
              v-for="option in viewModeOptions"
              @click="switchMode(option)"
            >
              <v-list-item-title>{{ option }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-footer>
    </div>
  </v-app>
</template>

<style>
.full-height {
  height: 100%;
}
</style>
