import React from 'react';

import { ReactComponent as Logo } from '../assets/import_codes.svg';

class NavbarLogo extends React.Component {
    render() {
        return (
            <div className="flex items-center px-10">
                <Logo className="h-10 w-10" />
                <h1 className="font-mono text-2xl ml-10">import codes</h1>
            </div>
        );
    }
}

export default NavbarLogo;