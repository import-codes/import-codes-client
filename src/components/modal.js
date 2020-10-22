import React from 'react';

export default function Modal(props) {
    return (
        <div className='fixed z-1 inset-0'>
            <div className='flex text-center sm:block'>
                <div className='absolute inset-0 bg-gray-700 bg-opacity-75'></div>
                <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-screen-xl w-full' role='dialog' aria-modal='true' aria-labelledby='modal-headline'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
