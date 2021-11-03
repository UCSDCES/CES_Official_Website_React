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

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../images/partner', false, /\.(png|jpe?g|svg)$/));

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
                <h1 style={{ textAlign: "left", marginTop: "40px", color: "#b54648" }}>Routine Activities</h1>
                <Row>
                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Career Prepare</Card.Title>
                                <Card.Text id="card-text">Invited alumni from different majors, covering STEM majors and Business-related majors, to share their job experiences,
                                timelines for job/internship application and views of career, better prepare students for future careers and applying to internship.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Interview Prepare</Card.Title>
                                <Card.Text id="card-text">Invited alumni from various STEM majors who have rich experiences in interviews and successfully got internships,
                                to share basic information about interviews, skills needed, tips to apply during the interview, and how to practice both technical and behavioral questions.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Inspiration Talk</Card.Title>
                                <Card.Text id="card-text">Inspiration talk is aimed to connect students and current professors. Professors who are working on cutting-edge and world-changing
                                research projects will be invited to share with students their recent research project along with their stories of becoming an outstanding researcher. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Grad Panel</Card.Title>
                                <Card.Text id="card-text">Grad Panel provides a closer opportunity for students to communicate with seniors, grad students, and UCSD alumni for future suggestions. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card id="home-card">
                            <Card.Body>
                                <Card.Title>Research Seminar</Card.Title>
                                <Card.Text id="card-text">Excellent undergraduate researchers are invited as guest speaker for Research Seminar to introduce research lab’s structure and on-campus resources that could help an undergrad work in lab at UCSD. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div style={{ marginTop: "80px" }}>
                                <h3 style={{ textAlign: "center" }}>and more ...</h3>
                            </div>
                            <div>
                                <a href="/events"><button id="leader-btn">See Schedule</button></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div>
            <Container id="partners">
                <h1 style={{ textAlign: "left", marginTop: "40px", color: "#b54648"}}>Partners</h1>
                <Row>
                    {
                        images.map(
                            (image, index) => {
                                return <Col style={{ padding: "10px", display: "flex", alignItems: "center", justifyContent: "center"}} lg={2} sm={6}>
                                    <div style={{}}>
                                        <Image className="partner-img" src={image.default} />
                                    </div>
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

export default Home;