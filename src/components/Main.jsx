import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
// import SingleCard from './components/SingleCard'

export default class Main extends React.Component {
    state = {
        query: '', //set state as an empty string
        results: [] //empty array to store searched cards after clicking submit button
    }

    handleSubmit = async e => { // must be a sync as API call generates a promise
        e.preventDefault()
        console.log("hello world")
        const APIURLSearch = `https://api.scryfall.com/cards/search?q=${this.state.query}`
        const response = await fetch(APIURLSearch)
        const results = await response.json() //data.data?????
        this.setState({ results: results }) //data.data????? sets results array in state to be equal to api search
    }

    render() {

        console.log(this.state) //logs each time value of searchfield is changed

        return <Container>
            <Row>
                <Col>
                    <Form className="mb-3 d-flex" onSubmit={this.handleSubmit}>
                        <Form.Control //on click of button runs handleSubmit function
                            id='search-input'
                            type="text"
                            placeholder="Search"
                            style={{ backgroundColor: "#222", color: "#aaa" }}
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })} //each time character entered updates
                        />
                        <Form.Control
                            type="submit"
                            title="Search"
                        />
                    </Form>
                </Col>
                {console.log("jelly beans")}
                <Row>

                    {/* {this.state.results.map(c => ...(
                        <Col xs={3}>
                            <div>HEllO</div>
                        </Col>
                        ))
                    } */}

                    {/* {

                        this.state.results.length > 0 ? this.state.results.map(card => {
                            <p> Name - {card.data.name}</p>
                        }) : null
                    */}

                    {/* {this.state.results.map(card =>
                        <Col xs={3}>
                            {results.name}
                        </Col>)} */}

                    {/* array.map(function(currentValue, index, arr), thisValue) */}

                </Row>
            </Row>
        </Container>
    }
}