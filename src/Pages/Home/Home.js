import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import HomeCarousel from "../../Components/Home-Carousel/Home-Carousel"
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import family2020 from "../../images/family2020.jpg";
import bg_3 from "../../images/bg_3.jpg";
import { Component } from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import "./Home.css";

const Home = () => (

    <div>
        <div id="home-header">
            <Container>
                <Navbar />
                <Row>
                    <Col xs={12} lg={8} md={10} ><h2 id="motto">Let the world hear the voice of Chinese Engineers</h2></Col>
                </Row>
            </Container>
        </div>

        <div id="site-section">
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Inspiration Talk</Card.Title>
                                <Card.Text id="card-text">An engineeing version of TEDx in UCSD hosted by CES. The best way to learn about frontier science and obtain connections with professors.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Grad School Application Roundtables</Card.Title>
                                <Card.Text id="card-text">A roundtable dinner party that gathers some of the most intelligent senior UCSD graduates who are about to persue their graduate school degrees.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Join us and change the world</Card.Title>
                                <Card.Text id="card-text">If you consider yourself as a passionate, ambitous and innovate indivisual who is currently persuing a degress in Science and Engineering, come, join us and let CES redefine your world.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div id="home-crew">
            <Container>
                <Row>
                    <Col lg={4} md={4} id="left-part">
                        <span>CES 2021</span>
                        <h2>2021 CES Crews</h2>
                        <p>Concurrently, CES is consisted of not only UCSD juniors, sophomores and freshmans who excel in their studies, but also senior graduates who are already admitted by prestigous schools such as Columbia University, UC Berkeley and so on.</p>
                        <span id="text-above-button">CES Alumini landed in top 30 American Graduate Institutes</span>
                        <button id="connect-btn">CONNECT WITH CES TODAY</button>
                    </Col>

                    <Col lg={1}></Col>

                    <Col lg={7} md={7} id="crew-image">
                        <Image fluid src={family2020} alt="Image Placeholder" />
                    </Col>
                </Row>

            </Container>
        </div>

        <Container id="donation">
            <h1 id="recent-events">Recent Events</h1>
            <HomeCarousel />
        </Container>

        <div id="leader-board">
            <Container>
                <Row>
                    <Col lg={5} md={5} id="crew-image">
                        <Image fluid src={bg_3} alt="Image Placeholder" />
                    </Col>
                    <Col lg={1}></Col>

                    <Col lg={5} md={5} id="left-part">
                        <span>NEXT GENERATION LEADERSHIP</span>
                        <h2>2021 CES Leader Board</h2>
                        <p>We strive to be better...</p>
                        <button id="leader-btn">KNOW MORE ABOUT US</button>
                    </Col>
                </Row>

            </Container>
        </div>

        <div>
            <Footer />
        </div>
    </div>


)

export default Home;