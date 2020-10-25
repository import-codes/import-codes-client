import React from 'react';

import 'highlight.js/styles/vs.css';

import { ClockIcon, FileIcon, HeartIcon, PackageDependenciesIcon } from '@primer/octicons-react'

export default function SnippetDetailHeader(props) {
    return (
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
    );
}
