import React from 'react';

export default function Navbar(props) {
    return (
        <header className='flex flex-row items-center justify-between h-16 w-full shadow'>
            {props.children}
        </header>
    );
}
