import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import './team.css';
import arrow from '../assets/arrow.png';
import arjun from '../assets/arjun.png';
import layne from '../assets/layne.jpeg';
import rahul from '../assets/rahul.png';
import hunter from '../assets/hunter.png';

class Team extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
}

scrollToMyRef = () => {
  window.scrollTo({
      top:this.myRef.current.offsetTop, 
      behavior: "smooth"
  })
}

  render() {
    return (
      <Container className="team-toplevel" style={{paddingTop:"2.5%"}}>
          <Container>
            <div className="team-header" style={{textAlign:"center", margin:"auto"}}>
                                                  
              <h2 style={{
                        fontFamily: "Comfortaa",
                        color:"#0F1012"}}>
                Team
              </h2>
            </div>
          </Container>
          <Container className="bio-container" style={{textAlign:"center",width:"100%",margin:"auto"}}>
            <Row className="bio-row"  style={{width:"100%",margin:"auto"}}>
              <Col className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={arjun} alt="Arjun bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                </img>
              </Col>
              <Col xs="1"></Col>
              <Col className="bio-name" sm={{ size: '3', offset: 1}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012", 
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                <span style={{fontSize:"x-large"}}>Arjun Bhuptani</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, project lead</span>
                </p>
              </Col>
              <Col className="bio-bio" sm={{ size: '4', offset: 0.50}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                Physicist turned smart contract developer and systems architect. 
                Game theory nerd, dad joke enthusiast and occasional sleeper. 
                </p>
              </Col>
            </Row>
            <Row className="bio-row"  style={{margin:"auto"}}>
            <Col className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={layne} alt="layne bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </Col>
              <Col className="bio-name" sm={{ size: '3', offset: 2}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012", 
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                <span style={{fontSize:"x-large"}}>Layne Haber</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, COO</span>
                </p>
              </Col>
              <Col className="bio-bio" sm={{ size: '4', offset: 0.50}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                 Operations and Web3 engineering. 
                 Currently busy skiing, cooking, and exploring rabbit holes. 
                 Pre-crypto: healthcare, venture banking, and bioengineering. 
                </p>
              </Col>
            </Row>
            <Row className="bio-row"  style={{margin:"auto"}}>
            <Col className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={rahul} alt="rahul bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </Col>
              <Col className="bio-name" sm={{ size: '3', offset: 2}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012", 
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                <span style={{fontSize:"x-large"}}>Rahul Sethuram</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, CTO</span>
                </p>
              </Col>
              <Col className="bio-bio" sm={{ size: '4', offset: 0.50}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                Full-stack developer, serial entrepreneur, investor, fan of blockchains. 
                Jiu-jitsu, yoga, and snowboarding enthusiast. Formerly an electrical engineer at Tesla.
                </p>
              </Col>
            </Row>
            <Row className="bio-row" style={{margin:"auto"}}>
            <Col className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={hunter} alt="hunter bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </Col>
              <Col className="bio-name" sm={{ size: '3', offset: 2}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012", 
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                <span style={{fontSize:"x-large"}}>Hunter Hillman</span>
                <br />
                <span style={{fontStyle:"italic"}}>head of growth</span>
                </p>
              </Col>
              <Col className="bio-bio" sm={{ size: '4', offset: 0.50}} style={{lineHeight:"130px"}}>
                <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          display:"inline-block",
                          lineHeight:"22px",
                          verticalAlign:"middle"}}>
                Strategist, economist, marketer, data junkie. 
                Thrives on music, hiking, coffee, and optimism. 
                Former economic consultant and quantitative data analyst. 
                </p>
              </Col>
            </Row>
            <Row className="jobs" id="jobs" style={{marginTop:"2.5%"}}>
                <Col>
                  <p style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          verticalAlign:"middle",
                          fontStyle: "italic"}}>
                  Connext is unlocking the micropayment economy of the future. If you'd like to help, reach out to support@connext.network.
                  </p>
                </Col>
            </Row>
            <Row > 
              <div style={{margin:"auto"}}>
                <a onClick={this.scrollToMyRef}><img src={arrow} alt="down arrow" style={{width:"30px", height:"30px"}}></img></a>
              </div>
            </Row>
          </Container>
          <Container style={{marginTop:"5%"}}>
                <div ref={this.myRef} style={{textAlign:"center", paddingBottom:"2.5%"}}>
                  <h1 style={{fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012"}}>
                      Want to learn more about Connext? 
                  </h1>
                </div>
                <Row className="team-cta" style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012"}}>
                  <Col className="read-docs" style={{textAlign:"right"}} ><Button outline color="warning" href="https://docs.connext.network" style={{color:"#FCA311"}}>Read our documentation</Button> </Col>
                  <Col xs="0"></Col>
                  <Col style={{textAlign:"left"}}><Button color="warning" href="https://discord.gg/yKkzZZm" style={{color:"white"}}>Join our community chat</Button></Col>
                </Row>
          </Container>
      </Container>
    )
  }
};

export default Team;


