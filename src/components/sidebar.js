import React from 'react';

export default function Sidebar(props) {
    return (
        <aside className='flex flex-col p-4 w-1/5 h-full min-h-screen shadow'>
            {props.children}
        </aside>
    );
}
