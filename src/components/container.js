import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <div className='h-full p-4'>
                {this.props.children}
            </div>
        );
    }
}

export default Container;