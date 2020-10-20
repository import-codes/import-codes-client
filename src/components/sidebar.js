import React from 'react';

export default function Sidebar(props) {
    return (
        <aside className='flex flex-col flex-shrink-0 p-4 w-1/5 h-full-screen shadow bg-white'>
            {props.children}
        </aside>
    );
}
