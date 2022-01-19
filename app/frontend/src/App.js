import React from 'react'
import './App.css'
import Header from './header'
import Footer from './footer'
import Product_card from './product_card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import Contacts from './contacts'
import Cart_modal from './cart_modal'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products_in_cart: [],
            cart_summ: 0,
            products: []
        }
    }

    render() {
        let products = []
        if (this.state.products != []) {
            for (let i = 0; i < this.state.products.length; i++) {
                products.push(<Col >
                    <Product_card title={this.state.products[i].name}
                        id={this.state.products[i].id}
                        desc={this.state.products[i].desc}
                        cost={this.state.products[i].cost}
                        img_src={this.state.products[i].img_src}
                        onclick={() => this.add_product(this.state.products[i].id, this.state.products[i].name, 1, this.state.products[i].cost)}
                    />
                </Col>)
            }
        }
        console.log(this.state.products_in_cart)
        return (
            < React.Fragment >
                {console.log(this.state.cart_summ)}
                <Header cart={<Cart_modal summ={this.state.cart_summ} products={this.state.products_in_cart} />} />
                < Container fluid >
                    <Router>
                        <Routes>
                            <Route path="/" element={
                                < div class="d-flex h-100 justify-content-center" >
                                    <Row md="auto" className="g-2">
                                        {products}
                                    </Row>
                                </div >}>
                            </Route>
                            <Route path="/contacts" element={<Contacts />}>
                            </Route>
                        </Routes>
                    </Router >
                </Container >
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

    add_product = (id, name, count, cost) => {
        for (var i = 0; i < this.state.products_in_cart.length; i++) {
            if (this.state.products_in_cart[i].id == id) {
                var products_copy = this.state.products_in_cart
                products_copy[i].count += count
                var new_summ = this.state.cart_summ + (count * cost)
                console.log(`Update product, new summ = ${new_summ}`)
                this.setState({ products_in_cart: products_copy, cart_summ: new_summ })
                return
            }
        }
        var joined = this.state.products_in_cart.concat({ "id": id, "name": name, "count": count, "cost": cost })
        var sum = this.state.cart_summ + (count * cost)
        console.log(`Add new product, new summ = ${sum}`)
        this.setState({ products_in_cart: joined, cart_summ: sum })
        return;
    }
}

export default App;
