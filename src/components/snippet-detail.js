import React from 'react';
import Button from './button';
import Modal from './modal';

import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';

import SnippetDetailHeader from './snippet-detail-header';

export default function SnippetDetail(props) {
    window.f = hljs;
    // window.f.highlightBlock(document.getElementById('hello'))
    return (
        <Modal>
            <SnippetDetailHeader />
            <div className='grid grid-cols-3'>
                <div className='flex-1 items-center px-2 py-2 border border-gray-300'>
                    <span>Resources</span>
                </div>
                <div className='flex-1 items-center px-4 py-2 -ml-px border border-gray-300'>
                    <span>Code</span>
                </div>
                <div className='flex-1 items-center px-2 py-2 -ml-px border border-gray-300'>
                    <span>Documentation</span>
                </div>
                <div>
                    <img src={props.image} alt='Snippet' />
                </div>
                <div className='p-4'>
                    <code className='font-mono'>
                        {props.code}
                    </code>
                </div>
                <div>

                </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                    <Button text='Copy' />
                </span>
                <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                    <Button text='Share' />
                </span>
            </div>
        </Modal>
    );
}
