import React from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';

export default function SnippetDetailBody(props) {
    return (
        <div className='grid grid-cols-2'>
            <div className='flex-1 items-center px-2 py-2 border border-gray-300'>
                <span>Documentation</span>
            </div>
            <div className='flex-1 items-center px-4 py-2 -ml-px border border-gray-300'>
                <span>Code</span>
            </div>
            <div>
                {props.docs}
            </div>
            <div className='p-4'>
                <code className='font-mono'>
                    {props.code}
                </code>
            </div>
        </div>
    );
}
