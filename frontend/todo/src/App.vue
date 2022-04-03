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

const doneToDo = (todo: ToDo) => {
  todo.done = true;
};

const undoneToDo = (todo: ToDo) => {
  todo.done = false;
};

const changeDone = (idName: string, todo: ToDo) => {
  if (todo.done) {
    undoneToDo(todo);
  } else {
    doneToDo(todo);
  }
  changeBreakline(idName, todo.done);
};

const changeBreakline = (idname: string, is_done: boolean) => {
  const obj = document.getElementById(idname);
  if (obj?.style.textDecoration == "line-through" && !is_done) {
    obj.style.textDecoration = "";
  } else if (obj?.style.textDecoration == "" && is_done) {
    obj.style.textDecoration = "line-through";
  } else {
    console.log("undefined condition");
  }
};
</script>

<template>
  <v-app class="full-height">
    <div class="full-height">
      <v-app-bar elevation="0" style="width: 100%" color="primary" app>
        <v-app-bar-title>ToDo</v-app-bar-title>
        <v-btn icon elevation="3" @click="newToDo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main app>
        <v-card style="height: 100%">
          <v-item-list
            v-for="(todo, index) in todoModel.list"
            v-bind:index="index"
          >
            <v-container elevation="20">
              <v-row>
                <v-btn
                  @click="changeDone(index.toString(), todo)"
                  elevation="0"
                  icon
                >
                  <v-icon v-if="todo.done" small>mdi-check-circle</v-icon>
                  <v-icon v-else small>mdi-checkbox-blank-circle</v-icon>
                </v-btn>

                <v-card elevation="0">
                  <v-card-title v-bind:id="index.toString()">
                    {{ todo.done }} {{ todo.description }}
                  </v-card-title>
                </v-card>
              </v-row>
            </v-container>
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
