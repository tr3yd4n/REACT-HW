import React from 'react'
import { Form } from 'react-bootstrap'

class Registration extends React.Component {
    state = {
        name: '',
        surname: '',
        email: '',
        year: 0,
        street: '',
        city: '',
        postcode: '',
        creditCard: ''
    }

    handleChange = (e) => {
        // this.setState({"email": e.target.value})
        // const { name, value } = e.target
        // console.log({ name, value })
        //this.state.email 
        //this.state["email"]
        // this.setState({ [name]: value })
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        console.log(this.state)
        return <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Forname</Form.Label> */}
                <Form.Control min="2" name="name" type="name" placeholder="First Name" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Surname</Form.Label> */}
                <Form.Control min="2" name="surname" type="name" placeholder="Surname" value={this.state.surname} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control min="2" name="email" type="email" placeholder="Name@example.com" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control min="2" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                {/* <Form.Label>Birth Year</Form.Label> */}
                <Form.Control as="select" name="year" placeholder="-    " value={this.state.year} onChange={this.handleChange}>
                    <option>1910</option>
                    <option>1911</option>
                    <option>1912</option>
                    <option>1913</option>
                    <option>1914</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Street</Form.Label> */}
                <Form.Control min="2" name="name" type="name" placeholder="Street" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>City</Form.Label> */}
                <Form.Control min="2" name="name" type="name" placeholder="City" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Post Code</Form.Label> */}
                <Form.Control min="2" name="name" type="name" placeholder="Post Code" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Credit Card</Form.Label> */}
                <Form.Control min="2" name="name" type="name" placeholder="Credit Card" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
        </Form>
    }
}


export default Registration