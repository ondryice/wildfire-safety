import React from 'react';
import { Col, Row } from 'reactstrap';
import { NavbarButton } from './NavbarButton';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.currentPage
        };

        this.sections = [
            {   name:'logo',
                text:'Logo'
            },
            {   name:'home-page',
                text: 'Home'
            },
            {   name:'about-page',
                text:'About'
            }
        ];
    }

    render() {
        return (
            <Row> <Col sm={12} md={{size:10, offset:1}}> <Row>
                {this.renderButtons()}
            </Row> </Col> </Row>
        );
    }

    renderButtons() {
        return this.sections.map(
            (section, index) => {
                let props = {};
                props.selected = this.state.currentPage === section.name;
                if(index === 0) props.theme = 'NavbarButton-logo';
                props.onSelect = () => { this.selectPage(section.name) };
                let colStyle =
                    index === 0 ? { paddingRight:0 } :
                    index === this.sections.length - 1 ? { paddingLeft:0 } :
                    { padding:0 }
                ;
                colStyle.display = 'inlineFlex';
                return (
                    <Col key={'NavbarButton no. '+index} style={colStyle}>
                        <NavbarButton {...props}>
                            {section.text}
                        </NavbarButton>
                    </Col>
                );
            }
        )
    }

    selectPage(pageName) {
        this.setState({ currentPage:pageName });
    }
}