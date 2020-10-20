import React from 'react';

export default function NavbarSearch(props) {
    return (
        <div className='flex items-center w-64 h-full'>
            <input
                value={props.searchContent}
                onBlur={props.onBlur}
                onKeyPress={props.onKeyPress}
                onChange={props.onChange}
                type='search'
                className='appearance-none bg-grey-darker h-full w-full'
                placeholder='Search...'
            />
        </div>
    );
}
