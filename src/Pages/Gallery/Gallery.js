import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container, Image } from 'react-bootstrap';
import React from "react";
import './Gallery.css';

const Gallery = () => {


    function importAll(r) {
        return r.keys().map(r);
    }

    //list of paths of all images
    const images = importAll(require.context('../../images/Gallery', false, /\.(png|jpe?g|svg)$/));

    return (
        <div>
            <div id="gallery-header">
                <Container>
                    <Navbar />
                    <p id="title">Gallery</p>
                </Container>
            </div>

            <div id="body">
                <Container>
                    <Row>
                        {
                            images.map(
                                (image, index) => {
                                    return <Col style={{padding: "0px"}} lg={4}>
                                        <Image src={image.default} fluid />
                                        <div id="psd"></div>
                                    </Col>
                                }
                            )
                        }
                    </Row>
                </Container>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )



}

export default Gallery;