import React, {Component} from "react";
import Slider from "react-slick";
import './Landing.css';
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import Demo from "../components/demo";
import codedemo from "../assets/codedemo.gif";
import computer from "../assets/computer.png";

class Landing extends Component {

  render() {
    var settings = {
      dots: true,
      infinite:false
      };
      


    return (
      <div className="landing-toplevel" style={{paddingTop:"6%"}}>
      <Container style={{marginBottom:"10%"}}>
        <Row>
          <Col xs="5" className="headline">
          <h2 style={{fontFamily:"Comfortaa"}}>Unlocking the micropayment economy</h2>
          <p className="tagline" style={{fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012"}}>
            Connext is a state channel network that enables cheap, low latency payments on Ethereum. 
            Our open source infrastructure makes it easy for developers to build the P2P applications of the future.</p>
            <Button className="gettingstarted-button" outline color="warning" href="https://docs.connext.network">Get Started</Button> 
          <Button className="joincommunity-button" color="warning" href="https://discord.gg/yKkzZZm" style={{marginLeft:"1%",color:"white"}}>Join our community chat</Button>
          </Col>
          <Col className="code-demo" xs="7" style={{paddingLeft:"15%"}}>
          <div className="computer-wrap" style={{position: "relative",
                                                  minHeight: "80%",
                                                  height: "auto",
                                                  maxHeight: "none",
                                                  maxWidth: "80%",
                                                  backgroundColor: "#fff"}}>
            <img src={computer} alt="laptop image" style={{width:"130%", zIndex:0}}/>
            <img src={codedemo} alt="code gif" style={{maxWidth:"95%",position:"absolute",top:"8%",left:"15.5%", zIndex:1}}/>
          </div>
          </Col>
        </Row>
      </Container>
      <Container className="viable" style={{marginBottom:"10%"}}>
        <Row style={{marginBottom:"2%"}}>
        <div style={{textAlign:"center"}}>
          <h3 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#0F1012"}}>
            Making blockchain viable.
          </h3>
      </div>
        </Row>
        <Row style={{textAlign:"center",
                                        fontWeight:"lighter",
                                        fontFamily: "'proxima-nova',sans-serif",
                                        color:"#0F1012"}}>
          <Col>
=
          </Col>
          <Col>
          <p>
          <span style={{color:"#FCA311"}} >DEVELOPER FOCUSED</span>
          <br />
          <br />
          We obsess about creating the optimal developer experience by shipping 
          modular, intuitive, and robust integration paths. Check out our docs to get started.
          </p>
          </Col>    
          <Col className="divider" xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}></Col> 
          <Col>
          <p>
          <span style={{color:"#FCA311"}} >TRUSTLESS</span>
          <br />
          <br />
          Our formally verified framework eliminates all counterparty risk. 
          This means your applicaction always preserves the security guarantees of the blockchain.
          </p>
          </Col>     
          <Col className="divider" xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}></Col>  
          <Col>
          <p>
          <span style={{color:"#FCA311"}} >OPEN SOURCE</span>
          <br />
          <br />
          We strongly support open source software and permissionless development. 
          We welcome any feedback and contributions to our repositories.
          </p>
          </Col>
        </Row>
      </Container>
      <Container style={{display:"flex",flexDirection:"column",marginBottom: "10%"}}>
        <Demo />
      </Container>
      <Container>
      <div className="best-for" style={{textAlign:"center",
                                        fontWeight:"lighter",
                                        fontFamily: "'proxima-nova',sans-serif",
                                        color:"#0F1012"}}>
          <h3 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#0F1012"}}>
            What is Connext best for?
          </h3>
      </div>
      <div className="usecase-desktop">
        <Slider {...settings}>
            <div className="wrap" style={{width:"50%", textAlign:"center"}}>
              <Row>
              <Col xs="8">
              <p style={{textAlign:"right"}}>
              <span style={{color:"#FCA311"}} >CONTENT PAYMENTS</span>
              <br />
              <br />
                By reducing your transaction costs to almost zero, 
                Connext empowers streamers and creators to seamlessly monetize their content, 
                no matter how low the price.
                </p>
                </Col>
              <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
              </Col>
                <Col xs="3">
                pic goes here
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{width:"50%", textAlign:"center"}}>
              <Row>
              <Col xs="8">
              <p style={{textAlign:"right"}}>
              <span style={{color:"#FCA311"}} >P2P MARKETPLACES</span>
              <br />
              <br />
                Controlling user funds and managing payouts is risky and takes work. 
                Connext lets you make your marketplace truly peer-to-peer, so you can 
                focus on what really matters.
              </p>
                </Col>
                <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
              </Col>
                <Col xs="3">
                pic goes here
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{width:"50%", textAlign:"center"}}>
              <Row>
              <Col xs="8">
              <p style={{textAlign:"right"}}>
              <span style={{color:"#FCA311"}} >IOT INTERACTIONS</span>
              <br />
              <br />
                Built from the ground up to enable automation, Connext Hubs let 
                IoT devices interact frictionlessly, maintaining the security of 
                your blockchain architecture. Beep boop.
              </p>
                </Col>
                <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
              </Col>
                <Col xs="3">
                pic goes here
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{width:"50%", textAlign:"center"}}>
              <Row>
              <Col xs="8">
              <p style={{textAlign:"right"}}>
              <span style={{color:"#FCA311"}} >DECENTRALIZED EXCHANGE</span>
              <br />
              <br />
                Using a Connext Hub to clear transactions, decentralized exchanges 
                can retain their non-custodial architecture, but enable activities 
                like high frequency trading.
              </p>
                </Col>
                <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
              </Col>
                <Col xs="3">
                pic goes here
                </Col>
                </Row>
            </div>
          </Slider>
      </div>
      <Container className="usecase-mobile">
      <div className="wrap" style={{ textAlign:"center"}}>
            <Row>
              <Col>
                pic goes here
                </Col>
              </Row>
              <Row>
              <Col>
              <p style={{textAlign:"center"}}>
              <span style={{color:"#FCA311"}} >CONTENT PAYMENTS</span>
              <br />
              <br />
              By reducing your transaction costs to almost zero, 
                Connext empowers streamers and creators to seamlessly monetize their content, 
                no matter how low the price.
              </p>
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{textAlign:"center"}}>
              <Row>
              <Col>
                pic goes here
                </Col>
              </Row>
              <Row>
              <Col>
              <p style={{textAlign:"center"}}>
              <span style={{color:"#FCA311"}} >P2P MARKETPLACES</span>
              <br />
              <br />
                Controlling user funds and managing payouts is risky and takes work. 
                Connext lets you make your marketplace truly peer-to-peer, so you can 
                focus on what really matters.
              </p>
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{textAlign:"center"}}>
            <Row>
              <Col>
                pic goes here
                </Col>
              </Row>
              <Row>
              <Col>
              <p style={{textAlign:"center"}}>
              <span style={{color:"#FCA311"}} >IOT INTERACTIONS</span>
              <br />
              <br />
              Built from the ground up to enable automation, Connext Hubs let 
                IoT devices interact frictionlessly, maintaining the security of 
                your blockchain architecture. Beep boop.
              </p>
                </Col>
                </Row>
            </div>
            <div className="wrap" style={{textAlign:"center"}}>
            <Row>
              <Col>
                pic goes here
                </Col>
              </Row>
              <Row>
              <Col>
              <p style={{textAlign:"center"}}>
              <span style={{color:"#FCA311"}} >DECENTRALIZED EXCHANGE</span>
              <br />
              <br />
              Using a Connext Hub to clear transactions, decentralized exchanges 
                can retain their non-custodial architecture, but enable activities 
                like high frequency trading.
              </p>
                </Col>
                </Row>
            </div>
      </Container>
      </Container>
      </div>
    );
  }
};

export default Landing;



