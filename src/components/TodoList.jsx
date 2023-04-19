import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
 
  return (
    <div>
      {todos.length ? <></> : <div className="title">Hozircha hech  narsa yo'q...</div>}
        <TodoItem todos={todos} setTodos={setTodos} /> 
      
    </div>
  );
}

export default TodoList;
