import React from 'react';
import Button from './button';
import Modal from './modal';

import SnippetDetailHeader from './snippet-detail-header';
import SnippetDetailBody from './snippet-detail-body';

export default function SnippetDetail(props) {
    return (
        <Modal>
            <SnippetDetailHeader
                author={props.author}
                package={props.package}
                creation={props.creation}
                files={props.files}
            />
            <SnippetDetailBody 
                images={props.images}
                code={props.code}
                docs={props.docs}
            />
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
