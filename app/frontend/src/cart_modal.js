import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import * as Icons from 'react-bootstrap-icons'

class Cart_modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            cart_is_empty: true
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        console.log('Toggled')
        var empty = false
        if (this.props.products.length == 0) {
            empty = true
        } else {
            empty = false
        }
        this.setState({ show: !this.state.show, cart_is_empty: empty })
    }

    render() {
        var temp_array = []
        this.props.products.forEach((e) => {
            temp_array.push(<tr>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td>{e.cost}</td>
                <td>
                    <Button variant="outline-primary" size='sm' className='m-1'><Icons.PlusLg /></Button>
                    <Button variant="outline-primary" size='sm' className='m-1'><Icons.DashLg /></Button>
                    <Button variant="outline-danger" size='sm' className='m-1' onClick={() => { this.props.delete_product(e.id) }}><Icons.Trash /></Button>
                </td></tr >)
        })
        return (
            < React.Fragment >
                <Button variant="success" onClick={this.toggle}>Корзина: {this.props.summ.toFixed(2)} RUB</Button>
                <Modal show={this.state.show} onHide={this.toggle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Корзина</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Количество</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                {temp_array}
                            </tbody>
                        </Table><br />
                        <h5>Итого: {this.props.summ.toFixed(2)} RUB</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.clear_cart}>Очистить корзину</Button>
                        <Button variant="secondary" onClick={this.toggle}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={this.props.order} disabled={this.state.cart_is_empty} >
                            Оформить заказ
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment >
        )
    }
}

export default Cart_modal