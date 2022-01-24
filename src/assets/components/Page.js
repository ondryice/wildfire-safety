import React from 'react';
import { notFoundError } from '../utils/Errors';

export class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'Home Page'
        };

        this.pageContents = {
            // 'Home Page'             :   <p>TODO: Home page</p>,
            'Not Yet Implemented'   :   notFoundError({})
        };

        this.getContent = this.getContent.bind(this);
    }

    render() {
        return (
            <div className='Page'>
                {this.getContent()}
            </div>
        );
    }

    // Uses `this.state.content` to render the appropriate page content
    // If `content` is not in `this.pageContents`, the user will be presented
    //   with a 'Content Not Found' error object.
    getContent() {
        return (
            this.pageContents[this.state.content]
            || notFoundError({name: this.state.content})
        );
    }
}