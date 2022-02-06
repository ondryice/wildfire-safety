import React from 'react';

export class NavbarButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected || false,
            onSelect: this.props.onSelect || null,
            theme: this.props.theme || 'link-btn'
        };
    }

    render() {
        return (
            <div className='NavbarButton-container'>
                <p>TODO: NAVBAR_BUTTON</p>
            </div>
        );
    }
}