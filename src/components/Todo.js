import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, toggleComplete,editTodo }) => {
  return (
    <div className="Todo">
      <div className="check-div">
        <input
          type="checkbox"
          className="check"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p className={task.completed ? "completed" : ""}>{task.task}</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
