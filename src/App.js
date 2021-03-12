import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormTasks from './components/FormTasks';
import TasksList from './components/TasksList';

const App = () => {
  const [tasks, changeTasks] = useState(
    [
      {
        id: 1,
        text: 'Wash the dishes',
        completed: false
      },
      {
        id: 2,
        text: 'Go to the supermarket',
        completed: false
      },
    ]
  );
  console.log(tasks);
  return (
    <div className='container'>
      <Header />
      <FormTasks tasks={tasks} changeTasks={changeTasks} />
      <TasksList tasks={tasks} changeTasks={changeTasks} />
    </div>
  );
}

export default App;
