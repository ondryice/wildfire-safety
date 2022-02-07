import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { SECTIONS } from '../../static/design/navbarSections';
import { NavbarButton } from './NavbarButton';

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
        console.log(JSON.stringify(this.state))
        return SECTIONS.map(
            (section, index) => {
                let colProps = this.getColProps(index);
                let btnProps = this.getBtnProps(section.name);
                if(index === 0) btnProps.theme = 'NavbarLogo';

                return (
                    <Col {...colProps}>
                        <NavbarButton {...btnProps}>
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

    getColProps(index) {
        return {
            key: 'NavbarButton-no-'+index,
            style:
                index === 0 ? { paddingRight:0 } :
                index === SECTIONS.length - 1 ? { paddingLeft:0 } :
                { padding:0 }
        };
    }

    getBtnProps(name) {
        return {
            selected: this.state.currentPage === name,
            onSelect: ()=> this.selectPage(name)
        };
    }
}