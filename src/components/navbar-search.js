import React from 'react';


class NavbarSearch extends React.Component {
    render() {
        return (
            <div className='flex items-center w-64'>
                <input
                    value={this.props.searchContent}
                    onBlur={this.props.onBlur}
                    onKeyPress={this.props.onKeyPress}
                    onChange={this.props.onChange}
                    type='search'
                    className='appearance-none bg-grey-darker h-full w-full py-2 px-2'
                    placeholder='Search...'
                />
            </div>
        );
    }
}

NavbarSearch.props = {

}

export default NavbarSearch;

