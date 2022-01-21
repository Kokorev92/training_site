import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './header'
import Product_card from './product_card'
import Footer from './footer'
import Contacts from './contacts'
import Cart_modal from './cart_modal'

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
                    <Product_card product={this.state.products[i]}
                        onclick={this.add_product}
                    />
                </Col>)
            }
        }
        console.log(this.state.products_in_cart)
        return (
            < React.Fragment >
                {console.log(this.state.cart_summ)}
                <Header cart={<Cart_modal
                    summ={this.state.cart_summ}
                    products={this.state.products_in_cart}
                    clear_cart={this.clear_cart}
                    delete_product={this.delete_from_cart}
                    order={this.place_order}
                />} />
                < Container fluid >
                    <Router>
                        <Routes>
                            <Route path="/" element={
                                < div className="d-flex h-100 " >
                                    <Row md="auto" className="g-2 justify-content-md-center ">
                                        {products}
                                    </Row>
                                </div >
                            }>
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
                this.setState({ products_in_cart: products_copy, cart_summ: parseFloat(new_summ.toFixed(2)) })
                return
            }
        }
        var joined = this.state.products_in_cart.concat({ "id": id, "name": name, "count": count, "cost": cost })
        var sum = this.state.cart_summ + (count * cost)
        console.log(`Add new product, new summ = ${sum}`)
        this.setState({ products_in_cart: joined, cart_summ: parseFloat(sum.toFixed(2)) })
        return;
    }

    clear_cart = () => {
        this.setState({ products_in_cart: [], cart_summ: 0 })
    }

    place_order = () => { }

    // Метод удаления товара из корзины
    delete_from_cart = (id) => {
        console.log(`Id product for delete = ${id}`)
        if (this.state.cart_summ == 0 || this.state.products_in_cart.length == 0) {
            return
        }
        for (var i = 0; i < this.state.products_in_cart.length; i++) {
            if (this.state.products_in_cart[i].id == id) {
                var new_summ = this.state.cart_summ - (this.state.products_in_cart[i].count * this.state.products_in_cart[i].cost)
                var cart_copy = this.state.products_in_cart
                cart_copy.splice(i, 1)
                this.setState({ products_in_cart: cart_copy, cart_summ: parseFloat(new_summ.toFixed(2)) })
                return
            }
        }
    }
}

export default App;
