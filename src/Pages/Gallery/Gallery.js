import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import React, { Component } from "react";
import { render } from "react-dom";
import { Route } from "react-router";

var listOfImages = [];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (
            <div>
                <div id="gallery-header">
                    <Container>
                        <Navbar />
                        <Row>
                            <Col><h1>Gallery</h1></Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <Row>
                        {
                            listOfImages.map(
                                (image, index) => <Col><img key={index} src={image} alt="info"></img></Col>
                            )
                        }
                    </Row>
                </div>


                <div>
                    <Footer />
                </div>
            </div>
        )
    }


}

export default Gallery;