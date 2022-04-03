<script setup lang="ts">
import { IToDo, changeDone } from "../modules/todo";

defineProps<{
  index: number;
  todo: IToDo;
}>();
</script>

<template>
  <v-container elevation="10" class="pa-1" fluid>
    <v-row class="pa-1">
      <v-col cols="auto" class="pa-1">
        <v-container class="pa-1">
          <v-btn @click="changeDone(index.toString(), todo)" elevation="0" icon>
            <v-icon v-if="todo.done">mdi-check-circle</v-icon>
            <v-icon v-else>mdi-checkbox-blank-circle</v-icon>
          </v-btn>
        </v-container>
      </v-col>
      <v-col class="pa-1">
        <v-container fluid class="pl-0">
          <textarea
            rows="1"
            v-model="todo.description"
            v-bind:id="index.toString()"
            style="color: white; width: 100%"
          />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
