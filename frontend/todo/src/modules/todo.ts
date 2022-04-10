export interface IToDo {
  description: string;
  done: boolean;
  deleted: boolean;
}

export type ToDoList = IToDo[];

export function newToDoList(): ToDoList {
  return [];
}

export function addToDo(todoList: ToDoList) {
  const todo: IToDo = {
    description: "",
    done: false,
    deleted: false,
  };
  todoList.push(todo);
}

export function flipDone(todo: IToDo) {
  if (todo.done) {
    undoneToDo(todo);
  } else {
    doneToDo(todo);
  }
}

export function deleteToDo(todo: IToDo) {
  todo.deleted = true;
}

function doneToDo(todo: IToDo) {
  todo.done = true;
}

function undoneToDo(todo: IToDo) {
  todo.done = false;
}
