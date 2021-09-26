import React from "react";
import {Image, Container, Row, Col} from "react-bootstrap";
import "./Footer.css";
import wechatQR2 from "../../images/wechatQR2.jpg";

const footer = () => (
    <footer className="footer">

        <div id="footer_icon_container">
            <div className="homepage_footer_icons mail_white_icon" onclick="window.open('mailto:wag001@ucsd.edu')">
                <div id="homepage_footer_widget_mail" className="homepage_footer_widgets"></div>
            </div>

            <div className="homepage_footer_icons github_black_icon" onclick="window.open ('https://github.com/Broccolito/CES_Official_Website')">
                <div id="homepage_footer_widget_github" className="homepage_footer_widgets"></div>
            </div>

            <div className="homepage_footer_icons green_icon" onmouseover="showImg('wechat')" onmouseout="hideImg('wechat')">

                <div id="homepage_footer_widget_wechat" className="homepage_footer_widgets">
                    <Image id="wechat" src={wechatQR2} style={{opacity: 1, zIndex: 1}} />
                </div>

            </div>

            <div className="homepage_footer_icons facebook_blue_icon" onclick="window.open ('https://www.facebook.com/CESUCSD/')">
                <div id="homepage_footer_widget_facebook" className="homepage_footer_widgets"></div>
            </div>


            <div className="homepage_footer_icons ins_pink_icon" onclick="window.open('https://www.instagram.com/ucsdces/')">
                <div id="homepage_footer_widget_instagram" className="homepage_footer_widgets"></div>
            </div>

        </div>

        <Container>
            <Row>
                <Col>
                    <p>
                        This Website is made and maintained by Chinese Engineering Society <br />
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default footer;