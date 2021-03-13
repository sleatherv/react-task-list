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
        completed: true
      },
    ]
  );
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div className='container'>
      <Header
        setShowCompleted={setShowCompleted}
        showCompleted={showCompleted} />
      <FormTasks tasks={tasks} changeTasks={changeTasks} />
      <TasksList
        tasks={tasks}
        changeTasks={changeTasks}
        showCompleted={showCompleted}
      />
    </div>
  );
}

export default App;
