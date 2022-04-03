export interface IToDo {
  description: string;
  done: boolean;
}

export type ToDoList = IToDo[];

export function newToDoList(): ToDoList {
  return [];
}

export function addToDo(todoList: ToDoList) {
  const todo: IToDo = {
    description: "",
    done: false,
  };
  todoList.push(todo);
}

export function changeDone(idName: string, todo: IToDo) {
  if (todo.done) {
    undoneToDo(todo);
  } else {
    doneToDo(todo);
  }
  changeBreakline(idName, todo.done);
}

function doneToDo(todo: IToDo) {
  todo.done = true;
}

function undoneToDo(todo: IToDo) {
  todo.done = false;
}

function changeBreakline(idName: string, isDone: boolean) {
  const obj = document.getElementById(idName);
  if (obj?.style.textDecoration == "line-through" && !isDone) {
    obj.style.textDecoration = "";
  } else if (obj?.style.textDecoration == "" && isDone) {
    obj.style.textDecoration = "line-through";
  } else {
    console.log("undefined condition");
  }
}
