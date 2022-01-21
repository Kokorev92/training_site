import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

class Place_order_form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.show} onHide={this.toggle} backdrop="static" keyboard={false} fullscreen={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Оформление заказа</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}



export default Place_order_form