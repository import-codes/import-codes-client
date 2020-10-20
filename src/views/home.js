import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';
import NavbarContainer from '../components/navbar-container';
import NavbarLogo from '../components/navbar-logo';
import NavbarSearch from '../components/navbar-search';
import NavbarTitle from '../components/navbar-title';
import Sidebar from '../components/sidebar';
import SnippetCard from '../components/snippet-card';
import SnippetContainer from '../components/snippet-container';

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
            <div className='antialiased'>
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
                        <img class='inline-block h-10 w-10 rounded-full text-white shadow-solid object-center object-cover' src='assets/img/box.png' alt='' />
                    </NavbarContainer>
                </Navbar>
                <div className='flex'>
                    <Sidebar>
                        <div className='uppercase font-bold text-xs px-4 py-2'>Main</div>
                        <div className=''>
                            <Link to='#' className='block items-center text-left shadow-light py-6 xl:py-2 xl:px-4'>
                                <div className='text-xs'>Dashboard</div>
                            </Link>
                        </div>
                        <div className=''>
                            <Link to='#' className='block items-center text-left shadow-light py-6 xl:py-2 xl:px-4'>
                                <div className='text-xs'>Notifications</div>
                            </Link>
                        </div>
                    </Sidebar>
                    <SnippetContainer>
                        <SnippetCard title='Print text' description='This code prints text to debugger console' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='2 This code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='3 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='4 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='5 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='6 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='7 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='8 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                        <SnippetCard title='print some text' description='9 This code prints some text to STDOUT' image={'assets/img/box.png'} />
                    </SnippetContainer>
                </div>
                {
                    // <SnippetDetail  />
                }
            </div>
        );
    }
}

export default Home;

