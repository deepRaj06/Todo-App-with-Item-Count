import React from "react";
import TaskHeader from './TaskHeader/TaskHeader.jsx'
import AddTask from './AddTask/AddTask.jsx'
import Tasks from './Tasks/Tasks.jsx'
import Task from './Task/Task.jsx';
// import Counter from './Counter/Counter.jsx'
import {v4 as uuidv4} from 'uuid';

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = React.useState([]);

  const addTodo = (newTodo) => {
      setTodos([
        ...todos, 
        {
          id: uuidv4(),
          value: newTodo,
          isCompleted: false,
        }
      ])
  }
  // const addTodo = (value) => {
  //   let filteredValue = todos.filter( (todo) => {
  //     return (
  //           {
  //             id: uuidv4(),
  //             value:  
  //             isCompleted: false
  //           })
  //   })
  //   setTodos(filteredValue);
  // }

  const removeBtn = (value) => {
    let filteredValue = todos.filter( (todo) => {
      return todo.value !== value
    })
    setTodos(filteredValue);
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader></TaskHeader>
      {/* Add Task */}
      <AddTask addTodo={addTodo}></AddTask>
      {/* Tasks */}
      <Tasks>
        {todos.map( (todo) => (
          <Task key={todo.id} todo={todo} removeBtn={removeBtn}>
              {/* <Counter></Counter> */}
          </Task>
        ))}
      </Tasks>
    </div>
  );
};

export default TaskApp;
