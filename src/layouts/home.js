import React from 'react';

import ComposableLayout from '../components/composable-layout';
import SectionLayout from '../components/section-layout';

class HomeLayout extends ComposableLayout {
    render() {
        return (
            <>
                <div className="font-sans antialiased h-screen">
                    <header className="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between">
                        topbar
                        {this.section.topBar}
                    </header>

                    <div className="pt-16 flex">
                        <div className="bg-grey-darkest relative h-full min-h-screen">
                            sidebar
                            {this.section.sideBar}
                        </div>

                        <div className="bg-white h-full pt-8">
                            <div className="text-center w-full text-grey-darkest">
                                <p className="py-2">Hope you like this!</p>
                                <p className="py-2"><a href="https://github.com/sschoger/heroicons-ui" className="text-black font-bold">Hero Icons</a> by <a href="https://twitter.com/steveschoger" className="text-black font-bold">Steve Schoger</a></p>
                                <p className="py-2">Adaptation of <a href="https://codyhouse.co/demo/responsive-sidebar-navigation/index.html" className="text-black font-bold">a CodyHouse Demo</a></p>
                                <p className="py-2 text-sm">Made by <a href="https://webartisan.be" className="text-black font-bold">Simon Depelchin</a>, <a href="https://twitter.com/SimonDepelchin" className="text-black font-bold">@SimonDepelchin</a> on Twitter</p>
                            </div>
                        </div>
                    </div>
                </div> */
            </>
        )
    }

}

HomeLayout.TopBar = class TopBar extends SectionLayout {}

HomeLayout.propTypes = {

};

export default HomeLayout;
