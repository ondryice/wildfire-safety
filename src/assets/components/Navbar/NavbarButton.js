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

    getClassName() {
        let classes = this.state.theme;
        if(this.state.selected) classes += ' NavbarButton-selected';
        return classes;
    }

    onClick() {
        if(this.props.onSelect != null && this.props.onSelect != undefined) this.props.onSelect();
        else this.setState({ selected: true });
    }
}