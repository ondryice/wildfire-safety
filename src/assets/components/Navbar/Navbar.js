import React from 'react';
import { NavbarButton } from './NavbarButton';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.currentPage
        };

        this.sections = [
            {   name:'home-page',
                text: 'Home',
                content: null
            },
            {   name:'about-page',
                text:'About',
                content: null
            }
        ];
    }

    render() {
        return (
            <div className='navbar'>
                <p>TODO: navbar content</p>
                {this.renderButtons()}
            </div>
        );
    }

    renderButtons() {
        return this.sections.map(
            (section, index) => {
                let props = {};
                props.selected = this.state.currentPage === section.name;
                if(index === 0) props.theme = 'NavbarButton-logo';
                return (
                    <NavbarButton key={'NavbarButton no. '+index} {...props}>
                        {section.text}
                    </NavbarButton>
                );
            }
        )
    }
}