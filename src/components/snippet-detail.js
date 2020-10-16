import React from 'react';
import Button from './button';
import Modal from './modal';

export default function SnippetDetail(props) {
    return (
        <Modal>
            <img src={props.image} alt='Snippet' />
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                            Print some text
                            </h3>
                        <div class="mt-2">
                            <p class="text-sm leading-5 text-gray-500">This code prints some text to STDOUT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <Button text='Copy' />
                </span>
                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <Button text='Share' />
                </span>
            </div>
        </Modal>
    );
}
