import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what task is today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodoForm;
