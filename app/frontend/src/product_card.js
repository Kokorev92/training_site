import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product_card extends React.Component {
    render() {
        return (<Card style={{ width: '18rem' }
        }>
            <Card.Img variant="top" src="logo512.png" />
            <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                    Product description
                </Card.Text>
                <div class="text-center">
                    <Button variant="primary">Add to cart</Button>
                </div>
            </Card.Body>
        </Card >)
    }
}

export default Product_card