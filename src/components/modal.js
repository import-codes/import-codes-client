import React from 'react';

export default function Modal(props) {
    return (
        <div className={'fixed z-1 inset-0' + (props.hidden ? ' hidden' : '')}>
            <div className='flex text-center sm:block'>
                <div className='absolute inset-0 bg-gray-700 bg-opacity-75'></div>
                <div className='inline-block bg-white rounded-md text-left shadow-xl transform my-8 max-w-screen-xl' aria-modal='true'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
