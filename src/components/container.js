import React from 'react';

export default function Container(props) {
    return (
        <div className='flex h-full p-4'>
            {props.children}
        </div>
    );
}
