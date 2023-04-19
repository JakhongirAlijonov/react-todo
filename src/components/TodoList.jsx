import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
 
  return (
    <div>
      {todos.length ? <></> : <div className="title">Hech narsa yo'q</div>}
        <TodoItem todos={todos} setTodos={setTodos} /> 
      
    </div>
  );
}

export default TodoList;
