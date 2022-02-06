import React from 'react';
import { Button } from 'reactstrap';

export class NavbarButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected || false,
            onSelect: this.props.onSelect || null,
            theme: this.props.theme || 'navbar-btn'
        };

        this.buttonText = this.props.children || '?';
    }

    render() {
        return (
            <Button>
                {this.buttonText}
            </Button>
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