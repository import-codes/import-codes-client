import React from 'react';

export default function NavbarContainer(props) {
    return (
        <div className='flex items-center h-full px-5 space-x-5'>
            {props.children}
        </div>
    );
}
