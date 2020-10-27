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
import SnippetDetail from '../components/snippet-detail';

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
        const text = `<div className='grid grid-cols-3'>
            <img src={props.image} alt='Snippet' />
            <code class='px-4 pt-5 pb-4 sm:p-6 sm:pb-4' >
            </code>
            <div class='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <span class='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                    <Button text='Copy' />
                </span>
                <span class='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                    <Button text='Share' />
                </span>
            </div>
        </div>`;

        return (
            <div className='antialiased'>
                <Navbar>
                    <NavbarContainer className='flex-shrink-0 w-1/5 px-5'>
                        <NavbarLogo />
                        <NavbarTitle title='import codes' />
                    </NavbarContainer>
                    <NavbarContainer className='justify-between w-full px-5'>
                        <NavbarSearch
                            searchContent={this.state.searchContent}
                            onBlur={this.handleSearchBlur}
                            onKeyPress={this.handleSearchKeyPress}
                            onChange={this.handleSearchChange}
                        />
                        <div>
                            <img className='inline-block h-10 w-10 rounded-full text-white shadow-solid object-center object-cover' src='assets/img/box.png' alt='' />
                        </div>
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
                        <SnippetCard title='Print text' description='This code prints text to debugger console' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='2 This code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUTThis code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='3 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='4 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='5 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='6 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='7 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='8 This code prints some text to STDOUT' image='assets/img/box.png' />
                        <SnippetCard title='print some text' description='9 This code prints some text to STDOUT' image='assets/img/box.png' />
                    </SnippetContainer>
                </div>

                <SnippetDetail
                    author='uselessscat'
                    package='Print some text'
                    images={['assets/img/box.png']}
                    code={text}
                    docs={'this is an example.'}
                />
            </div>
        );
    }
}

export default Home;

