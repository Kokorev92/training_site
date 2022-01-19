import React from 'react'
import Button from 'react-bootstrap/Button'

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            summ: 0
        }
    }

    render() {
        return (
            <Button variant="success" onClick={this.props.onclick}>Корзина: {this.state.summ} RUB</Button>
        )
    }
}

export default Cart