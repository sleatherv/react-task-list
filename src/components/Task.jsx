import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Task({ task }) {
    const [editingTask, changeEditingTask] = useState(false);
    const [newTask, changeNewTask] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        changeEditingTask(false);
    }
    return (
        <li className='list-tasks__task'>
            <FontAwesomeIcon
                icon={faCheckSquare}
                className='list-tasks__icon list-tasks__icon-check' />
            <div className='list-tasks__text'>
                {editingTask ?
                    <form action="" className="form-edit-task" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-edit-task__input"
                            value={newTask}
                            onChange={(e) => { changeNewTask(e.target.value) }}
                        />
                        <button
                            type="submit"
                            className="form-edit-task__btn"
                        >Actualizar</button>
                    </form>
                    :
                    task.text
                }
            </div>
            <div className='list-tasks__container-buttons'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='list-tasks__icon list-tasks__icon-action'
                    onClick={() => { changeEditingTask(!editingTask) }}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='list-tasks__icon list-tasks__icon-action' />
            </div>
        </li>
    )
}
