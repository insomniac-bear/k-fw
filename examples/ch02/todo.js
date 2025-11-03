const TODO = [
  { description: "Walk the dog", isDone: true },
  { description: "Water the plants", isDone: false },
  { description: "Sand the chairs", isDone: false },
];

const addTodoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

for (const todo of TODO) {
  todoList.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener("input", () => {
  addTodoButton.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener("keydown", ({ key }) => {
  if (key === "Enter" && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoButton.addEventListener("click", () => {
  addTodo();
});

function renderTodoInReadMode(todo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todo.description;

  if (todo.isDone) {
    span.classList.add("done");
  }

  if (!todo.isDone) {
    span.addEventListener("dblclick", () => {
      const idx = TODO.indexOf(todo);

      todoList.replaceChild(
        renderTodoInEditMode(todo),
        todoList.childNodes[idx]
      );
    });
  }

  li.appendChild(span);

  if (!todo.isDone) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "done";
    button.addEventListener("click", () => {
      const idx = TODO.indexOf(todo);
      removeTodo(idx);
    });
    li.append(button);
  }

  return li;
}

function renderTodoInEditMode(todo) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo;
  li.append(input);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add("button");
  saveBtn.addEventListener("click", () => {
    const idx = TODO.indexOf(todo);
    updateTodo(idx, input.value);
  });
  li.append(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    const idx = TODO.indexOf(todo);
    todoList.replaceChild(renderTodoInReadMode(todo), todoList.childNodes[idx]);
  });

  li.appendChild(cancelBtn);
  return li;
}

function addTodo() {
  const description = addTodoInput.value;

  TODO.push(description);
  const todo = renderTodoInReadMode(description);
  todoList.append(todo);

  addTodoInput.value = "";
  addTodoButton.disabled = true;
}

function removeTodo(index) {
  TODO[index].isDone = true;
}

function updateTodo(index, description) {
  TODO[index] = description;
  const todo = renderTodoInReadMode(description);
  todoList.replaceChild(todo, todoList.childNodes[index]);
}
