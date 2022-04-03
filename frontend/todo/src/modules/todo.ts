interface ToDo {
  description: string;
  done: boolean;
}

export type ToDoList = ToDo[];

export function newToDoList(): ToDoList {
  return [];
}

export function addToDo(todoList: ToDoList) {
  const todo: ToDo = {
    description: "new todo",
    done: false,
  };
  todoList.push(todo);
}

export function changeDone(idName: string, todo: ToDo) {
  if (todo.done) {
    undoneToDo(todo);
  } else {
    doneToDo(todo);
  }
  changeBreakline(idName, todo.done);
}

function doneToDo(todo: ToDo) {
  todo.done = true;
}

function undoneToDo(todo: ToDo) {
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
