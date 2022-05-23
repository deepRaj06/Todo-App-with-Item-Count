import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter.jsx'

const Task = ({todo , removeBtn}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[completed, setCompleted] = React.useState(todo.isCompleted);

  return (
    <li data-cy="task" className={styles.task}>

      <input 
        type="checkbox" 
        data-cy="task-checkbox" 
        checked={completed}
        onChange={ (e) => {
        setCompleted(e.target.checked); 
        }}
        />
      <div 
        data-cy="task-text"
        className={completed ? styles.striked : ''}>
          {todo.value}
      </div>
      {/* Counter here */}
      <Counter></Counter>
      <button 
      data-cy="task-remove-button"
      onClick={ () => {
        removeBtn(todo.value)
      }}
      >Remove</button>

    </li>
  );
};

export default Task;
