import React from 'react';
import Button from './button';

export default function SnippetCard(props) {
    return (
        <div className='bg-white rounded-lg text-left overflow-hidden shadow'>
            <img src={props.image} alt='Snippet' />
            <div class="flex flex-col items-start px-4 py-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4 font-mono" id="modal-headline">{props.title}</h3>
                <p class="text-sm leading-5 text-gray-500">{props.description}</p>
            </div>
            <div class="flex bg-gray-50 px-4 pb-4 flex-row-reverse">
                <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <Button text='Copy' />
                </span>
                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <Button text='Share' />
                </span>
            </div>
        </div>
    );
}
