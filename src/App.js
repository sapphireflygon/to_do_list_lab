import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    {name:"Buy shopping", priority:true},
    {name:"Clean bathroom", priority:false},
    {name:"Car's MOT", priority:true}
  ]);

  const [newTask, setNewTask] = useState("");

  const [newTaskPriority, setNewTaskPriority] = useState(false);

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.priority ? "high" : "low"}>
        <span>{task.name} --> </span>
        {task.priority ? <span className='high'>High Priority!</span> : <span className='low'>Low priority</span>}
      </li>
    );
  });

  const handleNewTaskPriorityChange = (event) => {
    if (event.target.value === "true") {
      setNewTaskPriority(true);
    } else {
      setNewTaskPriority(false);
    };
  };
  
  const saveNewTask = ((event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority:newTaskPriority});
    setTasks(copyTasks);
    setNewTask("");
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };
  
  return (
    <div className='App'>
      <h1>To-do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

    <form onSubmit={saveNewTask}>
      <label htmlFor='new-task'>Add a new task: </label>
        <input id="new-task" type="text" onChange={handleTaskInput} value={newTask}/>
      <br></br>
      <label htmlFor='new-task' name="radio-buttons" value={newTaskPriority ? "true" : "false"}>Priority: </label>
        <input name="radio-buttons" type="radio" value="true" onChange={handleNewTaskPriorityChange}/> High
        <input name="radio-buttons" type="radio" value="false" onChange={handleNewTaskPriorityChange}/> Low
        <input type="submit" value="Save New Task" onSubmit={saveNewTask}/>
    </form>

    </div>
  );
};

export default App;
