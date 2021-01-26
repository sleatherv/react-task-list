import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Task({ task }) {
    return (
        <li className='list-tasks__task'>
            <FontAwesomeIcon
                icon={faCheckSquare}
                className='list-tasks__icon list-tasks__icon-check' />
            <div className='list-tasks__text'>
                {task.text}
            </div>
            <div className='list-tasks__container-buttons'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='list-tasks__icon list-tasks__icon-action' />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='list-tasks__icon list-tasks__icon-action' />
            </div>
        </li>
    )
}
