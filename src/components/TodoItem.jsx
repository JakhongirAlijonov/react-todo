import React from "react";

function TodoItem({ todos, setTodos }) {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id == todo.id) {
          return { ...item, completed: !item.completed };
        } else return item;
      })
    );
  };

  return todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className={todo.completed ? "todo-item completed" : "todo-item"}
      >
        <p>{todo.title}</p>
        <div>
          <button
            className="todo-item-complete"
            onClick={() => handleComplete(todo)}
          >
            <i className="fa-solid fa-square-check"></i>
          </button>
          <button
            className="todo-item-delete"
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    );
  });
}

export default TodoItem;
