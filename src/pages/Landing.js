import React, {Component} from "react";
import './Landing.css';
import Demo from "../components/demo";
import BestFor from "../components/bestfor";
import Viable from "../components/viable";
import Explainer from "../components/billions";

class Landing extends Component {

  render() {
      
    return (
      <div className="landing-toplevel" style={{paddingTop:"6%"}}>
        <div className="headline" style={{display:"flex",marginBottom:"30%", marginTop:"3%"}}>
            <h2 style={{fontFamily:"Comfortaa", fontWeight:"bold"}}>Unlocking <br/><span style={{fontWeight:"normal"}}>the</span> micropayment economy</h2>
            <br />
            <p className="tagline" style={{fontWeight:"lighter",
                              fontSize:"24px",
                              fontFamily: "'proxima-nova',sans-serif",
                              color:"#0F1012"}}>
              Connext is a state channel network that enables cheap, low latency payments on Ethereum. 
              Our open source infrastructure makes it easy for developers to build the P2P applications of the future.
            </p>
            <div className="header-buttons">
            <a className="gettingstarted-button" href="https://docs.connext.network" style={{textDecoration:"none",color:"#002868"}}>
              Get Started
            </a>
            <a className="joincommunity-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none",color:"#FFF"}}>
              Join the community
            </a>
            </div>
        </div>
        <div style={{marginBottom: "20%"}}>
          <Explainer />
        </div>
        <div style={{marginBottom: "10%"}}>
          <Demo />
        </div>
        <div>
          <Viable />
        </div>
        <div style={{marginBottom:"10%"}}>
          <BestFor/>
        </div>
        <div style={{textAlign:"center"}}>
          <h2 style={{fontFamily:"Comfortaa", marginBottom:"5%"}}>Want to get started?</h2>
            <a className="signupnow-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none"}}>
              Sign up now
            </a>
        </div>
      </div>
    );
  }
};

export default Landing;



