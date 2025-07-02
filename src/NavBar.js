import React from 'react';
import logo from './logo.svg';

class NavBar extends React.Component {

    render() {
        return (
            <nav className='flex flex-row items-center shadow-white p-2 h-16 bg-gray-900 dark:bg-gray-900'>
                <img src={logo}  width="60px" alt="" />
                <h1 className='text-white text-2xl'>MusicalBeats</h1>
            </nav>
        )
    }
}

export default NavBar;