import React from 'react';

export class NavbarItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onSelect: this.props.onSelect || null,
            theme: this.props.theme || 'NavbarButton'
        };

        this.buttonText = this.props.children || '?';
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className={'NavbarItem ' + this.state.theme} onClick={this.onClick}>
                {this.buttonText}
            </div>
        );
    }

    onClick() {
        if(this.props.onSelect != null && this.props.onSelect != undefined)
            this.props.onSelect();
    }
}