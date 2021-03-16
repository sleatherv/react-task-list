import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


const Header = ({ showCompleted, setShowCompleted }) => {

    const toggleCompleted = () => {
        setShowCompleted(!showCompleted);
    }
    return (
        <header className='header'>
            <h1 className='header__title'>Tasks List </h1>
            {showCompleted ?
                <button
                    className='header__button'
                    onClick={() => toggleCompleted()}
                >
                    Hide completed
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
                </button>
                :
                <button
                    className='header__button'
                    onClick={() => toggleCompleted()}
                >
                    Show completed
                    <FontAwesomeIcon icon={faEye} className='header__icon-button' />
                </button>
            }
        </header>
    );
}

export default Header;