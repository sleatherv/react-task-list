import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, changeTasks, showCompleted }) => {
    const toggleCompleted = (taskId) => {
        changeTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        }));
    }
    const editTask = (taskId, newTaskText) => {
        changeTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    text: newTaskText
                }
            }
            return task;
        }));
    }
    const deleteTask = (taskId) => {
        changeTasks(tasks.filter((task) => {
            if (task.id !== taskId) {
                return task;
            }
            return;
        }));
    }
    return (
        <ul className='list-tasks'>
            {
                tasks.length > 0
                    ? tasks.map((task) => {
                        if (showCompleted) {
                            return <Task
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                                editTask={editTask}
                                deleteTask={deleteTask}
                            />
                        } else if (!task.completed) {
                            return <Task
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                                editTask={editTask}
                                deleteTask={deleteTask}
                            />
                        }
                        return;
                    })
                    : <div className="list-tasks__message">~ No added tasks ~</div>
            }
        </ul>
    )
}


export default TasksList;