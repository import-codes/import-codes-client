import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <header className='flex flex-row items-center justify-between h-16 w-full shadow'>
                {this.props.children}
            </header>
        );
    }
}

export default Navbar;