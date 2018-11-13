import React, {Component} from "react";
import {Link, Switch, Route} from "react-router-dom";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Jobs from "./Jobs";
import Team from "./Team";
import Landing from "./Landing";
import Demo from "../components/demo";
import './styles.css';
import logoHorizontal from '../assets/logoHorizontal.png';
import logoWhiteHorizontal from '../assets/logoWhiteHorizontal.png';

class Home extends Component {

render() {

    return (
      <div className="top">
          <Container className="baseMobile">
            <div className="header"></div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu" style={{zIndex:'3'}}>
              <ul className="sidebarMenuInner" style={{
                position:'relative',
                listStyleType: 'none',
                margin: '1%',
                padding: '0',
                overflow: 'hidden',
                textAlign:'center'
              }}>
                <li style={{float:'left', align:'center'}}><Link to="/"><img src={logoHorizontal} alt="Connext Logo Horizontal" style={{width:"50%"}}/></Link></li>
                <li style={{float:'right'}}><a href= "https://medium.com/connext" className = "topNavLinkMobile">Blog</a></li>
                <li style={{float:'right'}}><Link to="/team" className = "topNavLinkMobile">Team</Link></li>                
                <li style={{float:'right'}}><a href="https://discord.gg/yKkzZZm" className = "topNavLinkMobile">Chat</a></li>
                <li style={{float:'right'}}><a href="https://docs.connext.network" className = "topNavLinkMobile">Docs</a></li>
              </ul>
            </div>
            <Container>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/team" component={Team} />
                  <Route path="/jobs" component={Jobs} />
                </Switch>
            </Container>
            </Container> 
          <Container className="baseDesktop">
            <div className="header">
              <ul className="topnav" style={{
                listStyleType: 'none',
                margin: '1%',
                padding: '0',
                overflow: 'hidden',
                textAlign:'center'
                }}>
                <li style={{position:"relative",left:"-20%",float:'left'}}><Link to="/"><img src={logoHorizontal} alt="Connext Logo Horizontal" style={{width:"30%"}}></img></Link></li>
                <li style={{position:"relative",float:'right'}}><Link to="/team" className = "topNavLinkDesktop">Team</Link></li>
                <li style={{position:"relative",float:'right'}}><a href="https://docs.connext.network" className = "topNavLinkDesktop">Docs</a></li>
                <li style={{position:"relative",float:'right'}}><a href="https://discord.gg/yKkzZZm" className = "topNavLinkDesktop">Chat</a></li>                
                <li style={{position:"relative",float:'right'}}><a href= "https://medium.com/connext" className = "topNavLinkDesktop">Blog</a></li>               
              </ul>
            </div>
            <Container>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/team" component={Team} />
                  <Route path="/jobs" component={Jobs} />
                  <Route path="/demo" component={Demo} />
                </Switch>
            </Container>
          </Container>
          <div className="footer" id="footer">
            <Row style={{height:"2.5%",marginBottom:"2%",marginLeft:"2.5%",marginRight:"2.5%"}}>
              <Col className="footer-connext" style={{textAlign:"center"}} xs="9">
                <img className="footer-logo" src={logoWhiteHorizontal} alt="Connext Logo Horizontal White" style={{width:"100px",float:"left", marginLeft:"8%"}}></img>
                <br />
                <span className="footer-copy" style={{
                        fontFamily: "'proxima-nova',sans-serif", 
                        fontSize: "small",
                        color: "white",
                        float:"left", 
                        marginLeft:"5%"
                        }}>
                        © 2018 Connext, Inc. All rights reserved.
                </span>
              </Col>
              <Col className="footer-company-resources">
              <div style={{verticalAlign:"top",
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white",
                          display:"inline-block",
                        paddingRight:"5%"}}
                          xs="2">
                  COMPANY
                  <br />
                  <Link to="/team" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white"}}>Team</Link>
                  <br />
                  <Link to="/jobs" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white"}}>Jobs</Link>
              </div>
              <div style={{verticalAlign:"top",
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white",
                        display:"inline-block"}}
                          xs="2">
                  RESOURCES
                  <br />
                  <a href="https://docs.connext.network" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white"}}>Docs</a>
                  <br />
                  <a href="https://medium.com/connext" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white"}}>Blog</a>
                  <br />
                  <a href="https://discord.gg/yKkzZZm" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white"}}>Chat</a>
                  <br />
              </div>
              </Col>
            </Row>
          </div>
          </div>
    );
  }
};

export default Home;



