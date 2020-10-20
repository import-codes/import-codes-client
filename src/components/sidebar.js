import React from 'react';

export default function Sidebar(props) {
    return (
        <aside className='flex flex-col flex-shrink-0 relative w-1/5 h-auto' >
            <div className='shadow bg-white sticky p-4 h-screen' style={{ top: '4rem', 'max-height': 'calc(100vh - 4rem)' }}>
                {props.children}
            </div>
        </aside>
    );
}
