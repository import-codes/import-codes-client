import React from 'react';
import Button from './button';

export default function SnippetCard(props) {
    return (
        <div className='bg-white rounded-lg text-left overflow-hidden shadow'>
            <div onClick={(e) => props.handleView(e, props.id)} className='cursor-pointer'>
                <img className='object-cover' src={props.image} alt='Snippet' />
            </div>
            <div className='flex flex-col items-start px-4 py-4'>
                <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4' id='modal-headline'>{props.title}</h3>
                <p className='text-sm leading-5 text-gray-500 font-mono '>{props.description}</p>
            </div>
            <div className='flex bg-gray-50 px-4 pb-4 flex-row-reverse'>
                <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                    <Button text='Copy' />
                </span>
                <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                    <Button text='Share' />
                </span>
            </div>
        </div>
    );
}
