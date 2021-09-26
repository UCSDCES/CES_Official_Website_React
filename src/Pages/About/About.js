import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import family2020 from "../../images/family2020.jpg";
import ces_bg from "../../images/ces_bg.jpg";
import bg_1 from "../../images/bg_1.jpg";
import bg_2 from "../../images/bg_2.jpg";
import './About.css';

const About = () => (

    <div>
        <div id="about-header">
            <Container>
                <Navbar />
                <Row>
                    <p id="title">About Us</p>
                </Row>
            </Container>
        </div>
        <Container style={{ "margin-top": "50px", "margin-bottom": "50px"}}>
            <Image fluid src={family2020} alt="Image Placeholder" />
            <Image fluid src={ces_bg} alt="Image Placeholder" />
            <Row>
                <Col xs={12} lg={6} md={6}>
                    <p id="intro">
                        <b>Chinese Engineering Society (CES)</b> is a not-for-profit association dedicated to inspire, nurture, and bring together the next generation of engineers aimed to create positive impacts to our world.
                    </p>
                    <p id="intro">
                        Standing as a multidisciplinary organization of aspiring entrepreneurs and dedicated volunteers, we strive to foster the ethics and creativity upheld in the top engineering schools.
                    </p>
                </Col>
                <Col>
                    <p id="intro">
                        By maintaining an expansive network of scholars and professionals from fledgling student engineers, we aim to establish scientists and industry leaders, encourage incubation, communication, development of ideas and practices among those who are actively engaged in this endeavor.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} md={6}>
                    <Image fluid src={bg_1} alt="Image Placeholder" />
                </Col>
                <Col xs={12} lg={6} md={6}>
                    <Image fluid src={bg_2} alt="Image Placeholder" />
                </Col>
            </Row>
        </Container>



        <div>
            <Footer />
        </div>
    </div>


)

export default About;