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

      <v-textarea
        v-model="todo.description"
        v-bind:id="index.toString()"
        auto-grow
        rows="1"
        v-bind:hide-details="true"
        density="compact"
      >
      </v-textarea>
    </v-row>
  </v-container>
</template>
