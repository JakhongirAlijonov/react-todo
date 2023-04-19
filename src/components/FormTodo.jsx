import React from "react";
import uuid from "react-uuid";

function FormTodo({ input, setInput, todos, setTodos }) {
  const handleChange = (e) => {
    if(e.target.value.trim() === ""){
      setInput('')
    }else setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { completed: false , title: input,  id: uuid() }]);
    setInput('')
    
  };

  return (
    <form className="add-todo-form " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo here..."
        required
        value={input}
        className="add-todo-input"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FormTodo;
