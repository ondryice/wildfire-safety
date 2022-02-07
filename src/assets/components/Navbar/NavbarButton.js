import React from 'react';

export class NavbarButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected,
            onSelect: this.props.onSelect || null,
            theme: this.props.theme || 'NavbarButton'
        };

        this.buttonText = this.props.children || '?';

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className={this.getClassName()} onClick={this.onClick}>
                {this.buttonText}
            </div>
        );
    }

    getClassName() {
        let classes = 'NavbarItem';
        if(this.state.selected) classes += ' Navbar-selected';
        else classes += ' ' + this.state.theme;
        return classes;
    }

    onClick() {
        if(this.props.onSelect != null && this.props.onSelect != undefined) {
            console.log('onselect func provided')
            this.props.onSelect();
        }
        else this.setState({ selected: true });
    }
}