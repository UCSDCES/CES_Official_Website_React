import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import MemberCard from '../../Components/member-card/MemberCard';
import './Members.css';

const Members = () => (

    <div>
        <div id="about-header">
            <Container>
                <Navbar />
                <Row>
                    <Col lg={12}><h1 id='page-title'>Members</h1></Col>
                </Row>
                <Row>
                    <Col lg={3} md={1} s={0}></Col>
                    <Col>
                        <p id='page-intro'>Chinese Engineering Society consists of more than 60 passionate undergraduate students from different engineering and non-engineering majors</p>
                    </Col>
                    <Col lg={3} md={1} s={0}></Col>
                </Row>
            </Container>
        </div>
        <Container style={{ "margin-top": "50px", "margin-bottom": "50px" }}>
            <section>
                <h2>Leaderboard</h2>
                <Row>
                    <MemberCard name='Wanjun Gu' info="President" role="President" />
                    <MemberCard name='Weiwen Hong' info="Senior | Computer Science" role="Vice President" />
                    <MemberCard name='Xingqi Wang' info="Senior | Biochem & Cell Biology" role="Lead" department="CDP"/>
                    <MemberCard name='Duolan Ouyang' info="Junior | Computer Science" role="Lead" department="CDP"/>
                    <MemberCard name='Yueqing Qiao' info="Junior | Bioengineering: Bioinformatics" role="Lead" department="Media, DAD"/>
                    <MemberCard name='Huiqi Chen' info="Freshmen | Economics & Communication" role="Lead" department='BD' />
                    <MemberCard name='Zhuoran Shao' info="Sophomore | Cognitive Science, Machine Learning" role="Lead" department='BD' />
                    <MemberCard name='Hairui Hou' info="Junior | Neurobiology" role="Lead" department='DAD' />
                    <MemberCard name='Yuelai Wang' info="Junior | Bioengineering: Bioinformatics" role="Lead" department='DAD' />
                </Row>
            </section>
            <section>
                <h2>Members</h2>
                <Row>
                    <MemberCard name='Yilang He' info="Sophomore | Math-CS" role="Member" department="CDP" />
                    <MemberCard name='Manshi Yang' info="Sophomore | Probability & Statistics" role="Member" department="CDP" />
                    <MemberCard name='Jiawen Yu' info="Sophomore | Electrical Engineering" role="Member" department="CDP" />
                    <MemberCard name='Fangyi Lu' info="Sophomore | Bioengineering" role="Member" department="CDP" />
                    <MemberCard name='Yiqiao Hao' info="Freshmen | Biochem" role="Member" department="CDP" />
                    <MemberCard name='Yuexiang Zhang' info="Senior | Data Science" role="Member" department="CDP" />
                    <MemberCard name='Bihua Zhao' info="Freshmen | Maths-Computer Science & Management Science" role="Member" department="CDP" />
                    <MemberCard name='Haihao Sun' info="Junior | Computer Engineering" role="Member" department="CDP" />
                    <MemberCard name='Mingyu Fangao' info="Sophomore | Applied Math" role="Member" department="CDP" />
                    <MemberCard name='Yuru Zhou' info="Sophomore | Mathematics & Computer Science" role="Member" department="CDP" />

                    <MemberCard name='Jiadong Chen' info="Junior | Cognitive Science, HCI" role="Member" department="Media" />
                    <MemberCard name='Yueqian Ma' info="Junior | Computer Science" role="Member" department="Media, BD" />
                    <MemberCard name='Chi Zhang' info="Sophomore | Bioengineering: Biotech" role="Member" department="Media" />
                    <MemberCard name='Rongyu Ma' info="Junior | CSE: Bioinformatics" role="Member" department="Media" />

                    <MemberCard name='Dongyang Li' info="Freshmen | Mathematics & Computer Science" role="Member" department="BD" />
                    <MemberCard name='Xuanyu Dong' info="Sophomore | Neurobiology" role="Member" department="BD" />

                    <MemberCard name='Xinyi Zhu' info="Junior | Biology: Bioinformatics" role="Member" department="DAD" />
                    <MemberCard name='Shunkai Yu' info="Junior | Computer Engineering" role="Member" department="DAD" />
                    <MemberCard name='Yunrian Bi' info="Junior | General Chemistry" role="Member" department="DAD" />
                    <MemberCard name='Siyin Yang' info="Sophomore | Biotechnology" role="Member" department="DAD" />
                    <MemberCard name='Tianze Guo' info="Junior | Biotechnology" role="Member" department="DAD" />
                    <MemberCard name='Ziyi Wang' info="Junior | Biotechnology" role="Member" department="DAD" />
                    <MemberCard name='Junyi Xu' info="Freshmen | Electrical Engineering" role="Member" department="DAD" />
                    <MemberCard name='Yuli Wu' info="Freshmen | Chemistry / Biochemistry" role="Member" department="DAD" />
                    <MemberCard name='Qiuyu Wang' info="Junior | BioEngineering: Bioinformatics" role="Member" department="DAD" />
                    <MemberCard name='Bangjun Li' info="Freshmen | Math-P&S" role="Member" department="DAD" />
                    <MemberCard name='Yi Mao' info="Junior | Mechanical Engineering" role="Member" department="DAD" />
                    <MemberCard name='Xun Liu' info="Freshmen | Chemistry" role="Member" department="DAD" />

                    <MemberCard name='Yicheng Guo' info="Senior | Math-CS" role="Member" department="IA" />
                    <MemberCard name='Yu Cao' info="Junior | Data Science" role="Member" department="IA" />
                    <MemberCard name='Yiwei Cao' info="Senior | Math-Econ" role="Member" department="IA" />
                    <MemberCard name='Lehan Li' info="Junior | Data Science / Cognitive Science" role="Member" department="IA" />
                    <MemberCard name='Changhong Chen' info="" role="Member" department="IA" />
                </Row>

            </section>
            <section>
                <h2>Alumni</h2>

            </section>
        </Container>



        <div>
            <Footer />
        </div>
    </div>
)

export default Members;