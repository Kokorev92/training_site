import React from 'react'
import './App.css'
import Header from './header'
import Footer from './footer'
import Product_card from './product_card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    render() {
        let products = []
        if (this.state.products != []) {
            for (let i = 0; i < this.state.products.length; i++) {
                products.push(<Col >
                    <Product_card title={this.state.products[i].name}
                        desc={this.state.products[i].desc}
                        cost={this.state.products[i].cost}
                        img_src={this.state.products[i].img_src} />
                </Col>)
            }
        }

        return (
            <React.Fragment>
                <Header />
                <Container fluid>
                    <div class="d-flex h-100 justify-content-center">
                        <Row md="auto" className="g-2">
                            {products}
                        </Row>
                    </div>
                </Container>
                <Footer />
            </React.Fragment >
        )
    }

    componentDidMount() {
        axios.get('/products')
            .then(res => {
                const data = res.data
                this.setState({ products: data })
            })
    }
}

export default App;
