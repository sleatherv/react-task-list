import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FormTasks from './components/FormTasks';
import TasksList from './components/TasksList';

const App = () => {
  //Get saved tasks from local storage
  const savedTasks = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

  //Setting the status of tasks
  const [tasks, changeTasks] = useState(savedTasks);

  //Saving the status in localstorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  //Get saved showCompleted value from local storage
  let savedshowCompleted = ''
  if (localStorage.getItem('showCompleted') === null) {
    savedshowCompleted = true;
  } else {
    savedshowCompleted = localStorage.getItem('showCompleted') === 'true'
  }

  //ShowCompleted status
  const [showCompleted, setShowCompleted] = useState(savedshowCompleted);

  //Saving the status of showcompleted in localstorage
  useEffect(() => {
    localStorage.setItem('showCompleted', showCompleted.toString());
  }, [showCompleted]);

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
