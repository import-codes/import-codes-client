import React from 'react';

import moment from 'moment';

import 'highlight.js/styles/vs.css';

import { ClockIcon, FileIcon, HeartIcon, PackageDependenciesIcon } from '@primer/octicons-react'

export default function SnippetDetailHeader(props) {
    const timeSinceCreation = moment(1600000000000).fromNow()

    return (
        <div className='flex items-center px-4 py-2 space-x-4'>
            <img className='inline-block h-12 w-12 rounded-full text-white shadow-solid object-center object-cover' src='assets/img/box.png' alt='' />
            <div>
                <h1 className='text-2xl'>{props.author} / {props.package}</h1>
                <div className='flex space-x-2 text-gray-600 mb-2'>
                    <div className='space-x-1 place-self-center'>
                        <ClockIcon size='small' />
                        <span className='inline-block align-middle'>{timeSinceCreation}</span>
                    </div>
                    <div className='space-x-1'>
                        <FileIcon size='small' />
                        <span className='inline-block align-middle'>{props.fileCount || 0} Files</span>
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
