import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <aside className='flex flex-col p-4 w-1/5 h-full min-h-screen shadow'>
                {this.props.children}
            </aside>
        );
    }
}

export default Sidebar;