import React from 'react';
import Button from './button';
import Modal from './modal';

import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';

import { ClockIcon, FileIcon, HeartIcon, PackageDependenciesIcon } from '@primer/octicons-react'

export default function SnippetDetail(props) {
    window.f = hljs;
    // window.f.highlightBlock(document.getElementById('hello'))
    return (
        <Modal>
            <div className='flex items-center px-4 py-2 space-x-4'>
                <img className='inline-block h-12 w-12 rounded-full text-white shadow-solid object-center object-cover' src='assets/img/box.png' alt='' />
                <div>
                    <h1 className='text-2xl'>{props.author} / {props.title}</h1>
                    <div className='flex space-x-2 text-gray-600 mb-2'>
                        <div className='space-x-1 place-self-center'>
                            <ClockIcon size='small' />
                            <span className='inline-block align-middle'>12 Minutes ago</span>
                        </div>
                        <div className='space-x-1'>
                            <FileIcon size='small' />
                            <span className='inline-block align-middle'>1 File</span>
                        </div>
                        <div className='space-x-1'>
                            <PackageDependenciesIcon size='small' />
                            <span className='inline-block align-middle'>0 unbox?</span>
                        </div>
                        <div className='space-x-1'>
                            <HeartIcon size='small' />
                            <span className='inline-block align-middle'>1 Lifes saved</span>
                        </div>
                    </div>
                </div>
            </div>
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
                <div>
                    <code className='font-mono px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
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
