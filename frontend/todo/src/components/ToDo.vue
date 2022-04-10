<script setup lang="ts">
import { IToDo, flipDone, deleteToDo } from "../modules/todo";

function blur(event: any) {
  event.target.blur();
}

function newLine(text: string) {
  text = `${text}\n`;
}

defineProps<{
  todo: IToDo;
}>();
</script>

<template>
  <v-container elevation="10" class="pa-1" fluid>
    <v-row class="pa-1">
      <v-col cols="auto" class="pa-1">
        <v-container class="pa-1">
          <v-btn @click="flipDone(todo)" elevation="0" icon>
            <v-icon v-if="todo.done">mdi-check-circle</v-icon>
            <v-icon v-else>mdi-checkbox-blank-circle</v-icon>
          </v-btn>
        </v-container>
      </v-col>
      <v-col class="pa-1">
        <v-container fluid class="pl-0 pr-2">
          <textarea
            v-model="todo.description"
            v-bind:class="{ done: todo.done }"
            v-on:keydown.enter.exact.prevent
            v-on:keyup.enter.exact="blur"
            v-on:keydown.enter.shift.exact="newLine(todo.description)"
            rows="1"
            style="color: white; width: 100%"
          />
        </v-container>
      </v-col>
      <template v-if="todo.done">
        <v-col cols="auto" class="pa-1">
          <v-container class="pa-1">
            <v-btn elevation="0" @click="deleteToDo(todo)" icon small>
              <v-icon> mdi-close-circle </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<style>
.done {
  text-decoration-line: line-through;
}
</style>
