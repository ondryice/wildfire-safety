import React from 'react';
import { renderContent } from '../static/configs/Navbar.config';
import { notFoundError } from '../utils/Errors';
import { HomePage } from './HomePage/HomePage';
import { Navbar } from './Navbar/Navbar';

export class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'home'
        };

        this.pageContents = {
            'Home Page'             :   <HomePage />,
            'Not Yet Implemented'   :   notFoundError({})
        };

        this.selectContent = this.selectContent.bind(this);
    }

    render() {
        let props = {};
        return (
            <div className='Page'>
                <Navbar currentPage={this.state.content} selectPage={this.selectContent} />
                {this.getContent(props)}
            </div>
        );
    }

    // Uses `this.state.content` to render the appropriate page content
    //   if not present in the config file, presented with a 'Content Not Found' error object.
    getContent(props) {
        return (
            renderContent(this.state.content, props)
            || notFoundError({name: this.state.content})
        );
    }

    selectContent(pageName) {
        if(this.state.content !== pageName) this.setState({content: pageName});
    }
}