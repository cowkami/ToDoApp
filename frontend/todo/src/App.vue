<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({ count: 0 });
const increment = () => {
  state.count++;
};
</script>

<template>
  <v-app>
    <v-main> hello </v-main>
  </v-app>
</template>
