import React from 'react';

class NavbarSearch extends React.Component {
    render() {
        return (
            <div className='flex items-center w-64'>
                <input text={this.props.search} type='search' className='appearance-none bg-grey-darker h-full w-full py-2 px-2' placeholder='Search...' />
            </div>
        );
    }
}

export default NavbarSearch;

