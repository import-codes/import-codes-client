import React from 'react';

export default function NavbarSearch(props) {
    return (
        <div className='flex items-center w-64'>
            <input
                value={props.searchContent}
                onBlur={props.onBlur}
                onKeyPress={props.onKeyPress}
                onChange={props.onChange}
                type='search'
                className='appearance-none bg-grey-darker h-full w-full py-2 px-2'
                placeholder='Search...'
            />
        </div>
    );
}
