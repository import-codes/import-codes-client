import React from 'react';
import PropTypes from 'prop-types';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="ms-Grid" dir="ltr">
                <div class="ms-Grid-row">
                    <div class="ms-Grid-col ms-lg2">A</div>
                    <div class="ms-Grid-col ms-lg10">B</div>
                </div>
            </div>
        )
    }
}

HomeLayout.propTypes = {

};

export default HomeLayout;