import React from 'react';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.currentPage
        };

        this.sections = [
            {   name:'home-page',
                content: 'Home',
                classes: 'navbar-btn-home',
                onClick: null
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
                return (
                    <div
                        key={'nb-'+index}
                        className={section.classes}
                        onClick={section.onClick}
                    >
                        <p>{section.content}</p>
                    </div>
                );
            }
        )
    }
}