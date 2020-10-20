import React from 'react';

export default function Navbar(props) {
    return (
        <header className='flex flex-row sticky top-0 justify-between h-16 w-full shadow bg-white'>
            {props.children}
        </header>
    );
}
