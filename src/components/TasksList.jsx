import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, changeTasks }) => {
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
    return (
        <ul className='list-tasks'>
            {
                tasks.length > 0
                    ? tasks.map((task) => {
                        return <Task
                            key={task.id}
                            task={task}
                            toggleCompleted={toggleCompleted}
                        />
                    })
                    : <div className="list-tasks__message">~ No added tasks ~</div>
            }
        </ul>
    )
}


export default TasksList;