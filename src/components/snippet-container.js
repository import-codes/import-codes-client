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

        const colComponents = this.columns.map((c, i) => <div key={i} className='flow flow-cols space-y-4'>{c}</div>)

        return (
            <main className='grid place-items-start p-4 gap-4 grid-cols-4'>
                {colComponents}
            </main>
        );
    }
}

export default SnippetContainer;