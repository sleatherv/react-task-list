import React from 'react';
import Task from './Task';

const TasksList = ({ tasks }) => {
    return (
        <ul className='list-tasks'>
            {
                tasks.length > 0
                    ? tasks.map((task) => {
                        return <Task
                            key={task.id}
                            task={task} />
                    })
                    : <div className="list-tasks__message">~ No added tasks ~</div>
            }
        </ul>
    )
}


export default TasksList;