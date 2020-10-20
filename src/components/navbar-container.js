import React from 'react';

export default function NavbarContainer(props) {
    const classes = (props.className || '') + ' flex items-center h-full space-x-5';

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}
