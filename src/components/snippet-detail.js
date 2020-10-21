import React from 'react';
import Button from './button';
import Modal from './modal';

import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';

export default function SnippetDetail(props) {
    window.f = hljs;
    // window.f.highlightBlock(document.getElementById("hello"))
    return (
        <Modal>
            <div className='grid grid-cols-3'>
                <img src={props.image} alt='Snippet' />
                <code id='hello' className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    {
                    `<div className='grid grid-cols-3'>
                <img src={props.image} alt='Snippet' />
                <code class='px-4 pt-5 pb-4 sm:p-6 sm:pb-4' >
                </code>
                <div class='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                    <span class='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                        <Button text='Copy' />
                    </span>
                    <span class='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                        <Button text='Share' />
                    </span>
                </div>
            </div>`
            }
                </code>
                <div class='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                    <span class='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                        <Button text='Copy' />
                    </span>
                    <span class='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                        <Button text='Share' />
                    </span>
                </div>
            </div>
        </Modal>
    );
}
