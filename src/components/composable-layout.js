import React from 'react';
import SectionLayout from './section-layout';

class ComposableLayout extends React.Component {
    constructor(props) {
        super(props);
        console.log("PUTAZo");
        this.section = {};

        /*
        props.children.filter(element => {
            if (element instanceof SectionLayout) {
                this.section[element.name] = element;
                
                return false;
            }

            return true;
        });*/
    }
}

export default ComposableLayout;