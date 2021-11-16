import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import MemberCard from '../../Components/member-card/MemberCard';
import AlumniCard from '../../Components/alumni-card/alumniCard';
import './Members.css';

const Members = () => (

    <div>
        <div id="members-header">
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
                    <MemberCard name='Yueqing Qiao' info="Senior | Bioengineering: Bioinformatics" role="President" />
                    <MemberCard name='Duolan Ouyang' info="Senior | Computer Science" role="Vice President" />
                    <MemberCard name='Yuelai Wang' info="Senior | Bioengineering: Bioinformatics" role="Vice President" />
                    <MemberCard name='Yuqiu Wang' info="Senior | Bioengineering: Bioinformatics" role="Lead" department="Media"/>
                    <MemberCard name='Chi Zhang' info="Junior | Bioengineering: Bioinformatics" role="Lead" department="Media"/>
                    <MemberCard name='Fangyi Lu' info="Senior | Bioengineering: Biosystem" role="Lead" department="CDP"/>
                    <MemberCard name='Manshi Yang' info="Junior | Prob & Stats, CE" role="Lead" department="CDP"/>
                    <MemberCard name='Huiqi Chen' info="Sophomore | Economics & Communication" role="Lead" department='BD' />
                    <MemberCard name='Zhuoran Shao' info="Junior | Cognitive Science, Machine Learning" role="Lead" department='BD' />
                    <MemberCard name='Yuntian Bi' info="Senior | Gen Chem & ESYS " role="Lead" department='DAD' />
                    <MemberCard name='Tianze Guo' info="Senior | Bioengineering: Biotechnology" role="Lead" department='DAD' />
                    <MemberCard name='Yicheng Guo' info="Senior | Math-CS" role="Lead" department='HR' />
                    <MemberCard name='Lehan Li' info="Senior | Data Science & Cognitive Science" role="Lead" department='HR' />
                </Row>
            </section>
            <section>
                <h2>Members</h2>
                <Row>
                    <MemberCard name='Shijie Huang' info="Master | CSE" role="Member" department="CDP" />
                    <MemberCard name='Yilang He' info="Junior | Math-CS" role="Member" department="CDP" />
                    <MemberCard name='Jiawen Yu' info="Junior | Electrical Engineering" role="Member" department="CDP" />
                    <MemberCard name='Yiqiao Hao' info="Sophomore | Biochem" role="Member" department="CDP" />
                    <MemberCard name='Bihua Zhao' info="Sophomore | Maths-Computer Science & Management Science" role="Member" department="CDP" />
                    <MemberCard name='Mingyu Fangao' info="Junior | Applied Math" role="Member" department="CDP" />
                    <MemberCard name='Ruinan Ma' info="Freshmen | Undeclared" role="Member" department="CDP" />
                    <MemberCard name='Yucheng Huang' info="Junior | CE" role="Member" department="CDP" />
                    <MemberCard name='Chen Lou' info="Junior | CE" role="Member" department="CDP" />
                    <MemberCard name='Zhaoyu Zhang' info="Sophomore | Math-CS" role="Member" department="CDP" />
                    <MemberCard name='Zibin Gao' info="Junior | CE" role="Member" department="CDP" />
                    <MemberCard name='Mingxuan Nie' info="Freshmen | EE" role="Member" department="CDP" />
                    <MemberCard name='Bihua Zhao' info="Sophomore | Math-CS" role="Member" department="CDP" />

                    <MemberCard name='Jiadong Chen' info="Senior | Cognitive Science: HCI" role="Member" department="Media" />
                    <MemberCard name='Rongyu Ma' info="Senior | CSE: Bioinformatics" role="Member" department="Media" />
                    <MemberCard name='Yupeng Sun' info="Sophomore | Math-CS" role="Member" department="Media" />
                    <MemberCard name='Jian Qiu' info="Junior | Math&Econ" role="Member" department="Media" />
                    <MemberCard name='Zhaoyue Xu' info="Senior | Business Psych" role="Member" department="Media" />
                    <MemberCard name='Dan Yin' info="Senior | Biology Bioinformatics" role="Member" department="Media" />
                    <MemberCard name='Xianglin Chen' info="Sophomore | EE" role="Member" department="Media" />
                    <MemberCard name='Xiaoxiao Zou' info="Junior | CE, Applied Math" role="Member" department="Media" />
                    <MemberCard name='Xuanyu Dong' info="Junior | Neurobiology" role="Member" department="Media, BD" />
                    <MemberCard name='Yuxin Wang' info="Senior | Econ" role="Member" department="Media" />


                    <MemberCard name='Dongyang Li' info="Freshmen | Mathematics & Computer Science" role="Member" department="BD" />
                    <MemberCard name='Xuanyu Dong' info="Sophomore | Neurobiology" role="Member" department="BD" />

                    <MemberCard name='Xinyi Zhu' info="Senior | Biology: Bioinformatics" role="Member" department="DAD" />
                    <MemberCard name='Shunkai Yu' info="Senior | Computer Engineering" role="Member" department="DAD" />
                    <MemberCard name='Ziyi Wang' info="Senior | Biotechnology" role="Member" department="DAD" />
                    <MemberCard name='Junyi Xu' info="Senior | Electrical Engineering" role="Member" department="DAD" />
                    <MemberCard name='Yuli Wu' info="Sophomore | Chemistry / Biochemistry" role="Member" department="DAD" />
                    <MemberCard name='Bangjun Li' info="Sophomore | Math-P&S" role="Member" department="DAD" />
                    <MemberCard name='Yi Mao' info="Senior | Mechanical Engineering" role="Member" department="DAD" />
                    <MemberCard name='Xun Liu' info="Sophomore | Chemistry" role="Member" department="DAD" />
                    <MemberCard name='Yang Liu' info="Sophomore | Biochem" role="Member" department="DAD, HR" />
                    <MemberCard name='Jiachen Xi' info="Sophomore | Bioengineering: Bioinformatics" role="Member" department="DAD" />
                    <MemberCard name='Tianyi Li' info="Freshmen | Math" role="Member" department="DAD" />
                    <MemberCard name='Haoran Meng' info="Sophomore | Bioengineering:Bioengineering" role="Member" department="DAD" />

                    <MemberCard name='Zixin Ma' info="Junior | Data Science" role="Member" department="HR" />
                    <MemberCard name='Yu Cao' info="Junior | Data Science" role="Member" department="HR" />
                    <MemberCard name='Yiwei Cao' info="Senior | Math-Econ" role="Member" department="HR" />
                    <MemberCard name='Changhong Chen' info="Senior | Mechanical Engineering" role="Member" department="HR" />
                    <MemberCard name='Hongyue Jin' info="Junior | COGS, CE" role="Member" department="HR" />
                    <MemberCard name='Haofeng Chen' info="Junior | Mechanical Engineering" role="Member" department="HR" />
                </Row>

            </section>
            <section>
                <h2>Alumni</h2>
                <Row>
                    <AlumniCard name='Wanjun Gu' role='Former President'/>
                    <AlumniCard name='Zhizhen Qin' role='Former President'/>
                    <AlumniCard name='Weiwen Hong' role='Former VP'/>
                    <AlumniCard name='Xinyu Liu' role='Former Strategy'/>
                    <AlumniCard name='Zhiyuan Chen' role=''/>
                    <AlumniCard name='Shuyang Liu' role='Former DAD'/>
                    <AlumniCard name='Zhixiong Li' role='Former IA'/>
                    <AlumniCard name='Ruolei Dong' role='Former Media'/>
                    <AlumniCard name='Shantao Yi' role='Former CDP'/>
                    <AlumniCard name='Renxu Hu' role='Former CDP'/>
                    <AlumniCard name='Ziyan Cui' role='Former VP of external'/>
                    <AlumniCard name='Cheng Gong' role='Former CDP'/>
                    <AlumniCard name='Zixin Zeng' role='Former IA'/>
                    <AlumniCard name='Jason Zhang' role=''/>
                    <AlumniCard name='Yujian Mi' role='Former CDP'/>
                    <AlumniCard name='Shuyang Miao' role='Former CDP'/>
                    <AlumniCard name='Changpei Lin' role=''/>
                    <AlumniCard name='Flora Shen' role=''/>
                    <AlumniCard name='Jiaye Wang' role='Former DAD'/>
                    <AlumniCard name='Chunchen Hong' role='Former DAD'/>
                    <AlumniCard name='Yujie Chen' role='Former CDP'/>
                    <AlumniCard name='Zhizhen Qin' role='Former President'/>
                    <AlumniCard name='Zhizhen Qin' role='Former President'/>
                    <AlumniCard name='Guangze Wang' role='Former IA'/>
                    <AlumniCard name='Yijun Liu' role=''/>
                    <AlumniCard name='Luo Hao' role='Former President'/>
                    <AlumniCard name='Zhuoran Li' role='Former DAD, BD'/>
                    <AlumniCard name='Zhihan Hu' role='Former DAD'/>
                    <AlumniCard name='Chen Liu' role='Former CDP'/>
                    <AlumniCard name='Chen Lin' role='Former DAD'/>
                    <AlumniCard name='Tianchong Jiang' role='Former CDP'/>
                    <AlumniCard name='Yuyao Cheng' role=''/>
                    <AlumniCard name='Xiaoqian Wang' role=''/>
                    <AlumniCard name='Zheng Zhong' role='Former CDP'/>
                    <AlumniCard name='Yizhi Yuan' role=''/>
                    <AlumniCard name='Xiaoye Zuo' role=''/>
                    <AlumniCard name='Shinuo Xu' role='Former CDP'/>
                    <AlumniCard name='Yiran Shao' role='Former CDP'/>
                    <AlumniCard name='Yuexiang Zhang' role="Former CDP" />

                </Row>

            </section>
        </Container>



        <div>
            <Footer />
        </div>
    </div>
)

export default Members;