import React from 'react'
import './App.css'
import Header from './header'
import Footer from './footer'
import Product_card from './product_card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class App extends React.Component {

    render() {
        let products = []
        for (let i = 0; i < 10; i++) {
            products.push(<Col md="auto">
                <Product_card />
            </Col>)
        }
        return (
            <React.Fragment>
                <Header />
                <Container fluid className="justify-content-centers">
                    <Row md="auto" className="g-1 h-100 d-flex justify-content-centers">
                        {products}
                    </Row>
                </Container>
                <Footer />
            </React.Fragment >
        )
    }
}

export default App;
