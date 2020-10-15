import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/container';
import Navbar from '../components/navbar';
import NavbarLogo from '../components/navbar-logo';
import NavbarSearch from '../components/navbar-search';
import Sidebar from '../components/sidebar';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authorized: false,
            searchContent: ''
        }
    }

    handleSearchBlur = (event) => {

    }

    handleSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Do search...');
        }
    }

    handleSearchChange = (event) => {
        this.setState({ searchContent: event.target.value });
    }

    render() {
        return (
            <div className="antialiased">
                <Navbar>
                    <div className='flex h-full'>
                        <NavbarLogo />
                        <NavbarSearch
                            searchContent={this.state.searchContent}
                            onBlur={this.handleSearchBlur}
                            onKeyPress={this.handleSearchKeyPress}
                            onChange={this.handleSearchChange}
                        />
                    </div>
                    <div className='flex items-center h-full'>
                        hola
                    </div>
                </Navbar>
                <div className='flex'>
                    <Sidebar>
                        <div className='uppercase font-bold text-xs px-4 py-2'>Main</div>
                        <div className='sidebar-item with-children'>
                            <Link to='#' className='block items-center text-left shadow-light py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black'>
                                <div className='text-xs'>Dashboard</div>
                            </Link>
                        </div>
                        <div className='sidebar-item with-children'>
                            <Link to='#' className='block items-center text-left shadow-light py-6 xl:py-2 xl:px-4 border-l-4 border-blue-dark bg-black xl:opacity-75'>
                                <div className='text-white text-xs'>Notifications</div>
                            </Link>
                        </div>
                    </Sidebar>
                    <Container>
                        <div className='w-full text-grey-darkest'>
                            <p className='py-2'>Hope you like this!</p>
                            <p className='py-2 text-sm'>Because this is an example </p>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;

