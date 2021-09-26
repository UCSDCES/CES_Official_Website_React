import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container} from 'react-bootstrap';
import EventCard from '../../Components/event-card/eventCard';
import './Events.css';
import pic from '../../images/CDP.jpg'

const Events = () => (

    <div>
        <div id="about-header">
            <Container>
                <Navbar />
                <Row>
                    <p id="title">News & Events</p>
                </Row>
            </Container>
        </div>
        <h1 style={{marginTop: "20px", marginBottom: "20px", color: "#b54648"}}>Upcoming</h1>
        <div className='event-container' >
            <EventCard date='May 6th' title='Grad Panel' image={pic} intro='ggtfytftyrdrtesykiyftgugigufid65ygigoyigpoy'/>
            <EventCard date='May 6th' title='Grad Panel' image={pic} intro='ggtfytftyrdrtesykiyftgugigufid65ygigoyigpoy'/>  
        </div>
        <h1 style={{marginTop: "20px", marginBottom: "20px", color: "#b54648"}}>Past</h1>


        <div>
            <Footer />
        </div>
    </div>
)

export default Events;