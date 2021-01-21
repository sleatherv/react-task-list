import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Tasks List </h1>
            <button className='header__button'>
                Hide completed
                <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
            </button>
        </header>
    )
}

export default Header;