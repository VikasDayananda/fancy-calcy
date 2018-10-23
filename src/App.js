import React,{Component} from 'react'
import { hot } from 'react-hot-loader'
import { Container, Row, Col } from 'react-grid-system';
import './App.css'
class App extends Component{
    render(){
        return(
            <container className="container">
                <Row className="result">
                    <span>Result</span>
                </Row>
                <Row>
                    <Col sm={3} className="cell">
                        <span>AC</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>+/-</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>%</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>÷</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className="cell">
                        <span>7</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>8</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>9</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>×</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className="cell">
                        <span>4</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>5</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>6</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>-</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className="cell">
                        <span>1</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>2</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>3</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>+</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className="cell">
                        <span>0</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>.</span>
                    </Col>
                    <Col sm={3} className="cell">
                        <span>=</span>
                    </Col>
                </Row>

            </container>
        )
    }
}


export default hot(module)(App)
