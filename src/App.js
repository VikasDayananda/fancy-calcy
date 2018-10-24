import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Container, Row, Col} from 'react-grid-system';
import './App.css'

const obj = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']

]

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    enteredValue(val) {
        this.setState({value: val})
    };

    render() {
        return (
            <Container className="container">
                <Row className="result">
                    <span>{this.state.value}</span>
                </Row>
                {obj.map(val => {
                    return <Row>
                        {val.map(v => {
                            return <Col sm={3} className="cell" onClick={() => this.enteredValue(v)}>
                                <span>{v}</span>
                            </Col>
                        })}
                    </Row>
                })}
            </Container>
        )
    }
}


export default hot(module)(App)
