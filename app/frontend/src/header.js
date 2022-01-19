import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap//Nav'
import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand >Интернет-магазин</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">На главную</Nav.Link>
                        <Nav.Link href="/contacts">Контакты</Nav.Link>
                    </Nav>
                    <Nav className="navbar-right">
                        {this.props.cart}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
    }
}

export default Header