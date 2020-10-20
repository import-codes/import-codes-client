import React from 'react';

class SnippetContainer extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [];
    }

    render() {
        for (let i = 0; i < this.props.children.length; i++) {
            const column = i % (this.props.columns || 4);

            if (this.columns[column] === undefined) {
                this.columns[column] = [];
            }

            this.columns[column].push(this.props.children[i])
        }

        const colComponents = this.columns.map(c => <div className="grid grid-cols-1 auto-rows-auto gap-4">{c}</div>)

        return (
            <div className='grid place-items-start p-4 gap-4 grid-cols-4'>
                {colComponents}
            </div>
        );
    }
}

export default SnippetContainer;