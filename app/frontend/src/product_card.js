import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product_card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Card style={{ width: '12rem' }}>
            <div class="text-center"><Card.Img alt="Нет изображения" variant="top" src={this.props.img_src} style={{ width: 150, height: 150 }} /></div>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    Цена: {this.props.cost} RUB
                </Card.Text>
                <div class="text-center">
                    <Button variant="primary">В корзину</Button>
                </div>
            </Card.Body>
        </Card >)
    }
}

export default Product_card