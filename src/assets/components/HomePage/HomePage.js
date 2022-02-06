import React from 'react';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bulletinShown: false
        };
    }

    render() {
        return (
            <div className='HomePage-container'>
                <p>TODO: Home Page contents</p>
            </div>
        );
    }


    // TODO: CONFIRM SECTIONS OF HOME PAGE
    // renderNewsBulletin() {

    // }

    // renderQuickTips() {

    // }

    // renderTrivia() {

    // }

    // renderStories() {

    // }
}