import React from 'react';

export default function Sidebar(props) {
    return (
        <aside className='flex flex-shrink-0 relative w-1/5 h-auto' >
            <div className='flex flex-col shadow bg-white sticky p-4 h-screen w-full justify-between overflow-y-auto' style={{ top: '4rem', maxHeight: 'calc(100vh - 4rem)' }}>
                {props.children}
            </div>
        </aside>
    );
}
