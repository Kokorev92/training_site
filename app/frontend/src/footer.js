import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
class Footer extends React.Component {
    render() {
        return (<Navbar bg="dark" variant="dark" expand="lg" fixed="bottom" className="justify-content-center">
            <Navbar.Text >
                Copyright &copy; Кокорев Я.С. 1045М
            </Navbar.Text>
        </Navbar>)
    }
}

export default Footer