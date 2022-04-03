<script setup lang="ts">
import { IToDo, changeDone } from "../modules/todo";

defineProps<{
  index: number;
  todo: IToDo;
}>();
</script>

<template>
  <v-container elevation="10">
    <v-row>
      <v-btn @click="changeDone(index.toString(), todo)" elevation="0" icon>
        <v-icon v-if="todo.done">mdi-check-circle</v-icon>
        <v-icon v-else>mdi-checkbox-blank-circle</v-icon>
      </v-btn>

      <v-card elevation="0">
        <v-card-title v-bind:id="index.toString()">
          {{ todo.description }}
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>
