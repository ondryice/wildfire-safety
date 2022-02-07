import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { SECTIONS } from '../../static/configs/Navbar.config';
import { NavbarItem } from './NavbarItem';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.currentPage
        };
    }

    render() {
        return (
            <Container fluid> <Row>
                {this.renderButtons()}
            </Row> </Container>
        );
    }

    renderButtons() {
        return SECTIONS.map(
            (section, index) => {
                let colProps = this.getColProps(index);
                let btnProps = { onSelect: ()=> this.selectPage(section.name) };
                if(index === 0) btnProps = { theme: 'NavbarLogo' };
                else if(this.state.currentPage === section.name) {
                    colProps.key += '-selected';
                    btnProps.theme = 'Navbar-selected'
                }

                return (
                    <Col {...colProps}>
                        <NavbarItem {...btnProps}>
                            {section.text}
                        </NavbarItem>
                    </Col>
                );
            }
        )
    }

    selectPage(pageName) {
        this.setState({ currentPage:pageName });
    }

    getColProps(index) {
        return {
            key: 'NavbarItem-no-'+index,
            style:
                index === 0 ? { paddingRight:0 } :
                index === SECTIONS.length - 1 ? { paddingLeft:0 } :
                { padding:0 }
        };
    }
}