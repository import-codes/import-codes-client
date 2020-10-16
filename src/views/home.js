import React from 'react';
import { Link } from 'react-router-dom';
import SnippetDetail from '../components/snippet-detail';

import Container from '../components/container';
import Navbar from '../components/navbar';
import NavbarContainer from '../components/navbar-container';
import NavbarLogo from '../components/navbar-logo';
import NavbarSearch from '../components/navbar-search';
import NavbarTitle from '../components/navbar-title';
import Sidebar from '../components/sidebar';
import SnippetCard from '../components/snippet-card';

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
                    <NavbarContainer>
                        <NavbarLogo />
                        <NavbarTitle title='import codes' />
                        <NavbarSearch
                            searchContent={this.state.searchContent}
                            onBlur={this.handleSearchBlur}
                            onKeyPress={this.handleSearchKeyPress}
                            onChange={this.handleSearchChange}
                        />
                    </NavbarContainer>
                    <NavbarContainer>
                        hola
                    </NavbarContainer>
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
                        <div className='flex flex-col'>
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                        </div>
                        <div className='flex flex-col'>
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                        </div>
                        <div className='flex flex-col'>
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                            <SnippetCard image={'assets/img/box.png'} />
                        </div>
                       
                    </Container>
                </div>
                {
                    // <SnippetDetail  />
                }
            </div>
        );
    }
}

export default Home;

