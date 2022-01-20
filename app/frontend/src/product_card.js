import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
class Product_card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
    }

    render() {
        return (<Card style={{ width: '12rem' }}>
            <div class="text-center"><Card.Img alt="Нет изображения" variant="top" src={this.props.product.img_src} style={{ width: 150, height: 150 }} /></div>
            <Card.Body>
                <Card.Title>{this.props.product.name}</Card.Title>
                <Card.Text>
                    Цена: {this.props.product.cost.toFixed(2)} RUB
                </Card.Text>
                <div class="text-center">
                    <FormControl type="number" size="sm"
                        value={this.state.count}
                        onChange={(event) => { this.setState({ count: event.target.value }) }}
                        min={1} />
                    <Button variant="primary" className="m-1"
                        onClick={() => { this.props.onclick(this.props.product.id, this.props.product.name, this.state.count, this.props.product.cost) }}>
                        В корзину
                    </Button>
                </div>
            </Card.Body>
        </Card >)
    }
}

export default Product_card