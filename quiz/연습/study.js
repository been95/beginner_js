document.addEventListener("DOMContentLoaded", () => {
  const todolist = () => {
    const wrap = document.querySelector(".todo-list-wrap");
    if (!wrap) {
      return false;
    }
    const input = wrap.querySelector("#todo");
    const addButton = wrap.querySelector("#add-button");
    const todoList = wrap.querySelector("#todo-list");
    const msg = wrap.querySelector(".msg");

    const addTodo = () => {
      if (input.value === "") {
        msg.textContent = "할 일을 입력하세요!";
        return false;
      }
      const item = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const text = document.createElement("span");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "제거하기";

      text.textContent = input.value;
      input.value = "";

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(deleteButton);
      todoList.appendChild(item);

      checkbox.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          text.style.textDecoration = "line-through";
        } else {
          text.style.textDecoration = "none";
        }
      });

      deleteButton.addEventListener("click", (event) => {
        todoList.removeChild(event.currentTarget.parentNode);
      });
    };

    addButton.addEventListener("click", addTodo);

    input.addEventListener("keypress", (event) => {
      const ENTER = 13;
      if (event.keyCode === ENTER) addTodo();
    });
  };

  todolist();
});
