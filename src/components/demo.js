import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import './demo.css';
import spinner from '../assets/spinner.gif';
import greencheck from '../assets/greencheck.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4A from '../assets/step4A.png';
import step4B from '../assets/step4B.jpg';
import bullet from '../assets/bullet.jpg';


class Demo extends Component {
    constructor(props) {
        super(props);
    
        //this.handleDepositEntry = this.handleDepositEntry.bind(this);
        this.handleThreadEntry = this.handleThreadEntry.bind(this);

        this.handleDepositSubmit = this.handleDepositSubmit.bind(this);
        this.handleThreadSubmit = this.handleThreadSubmit.bind(this);
        this.handleDrain = this.handleDrain.bind(this);
        this.cashOut = this.cashOut.bind(this);
      }
    state = {
        balanceA: 0,
        balanceB: 0,
        onChainBalanceB:0,
        value: 0,
        toPay:0,
        txCount:0,
        showSpinner:null
      };

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    //   handleDepositEntry(event) {
    //     this.setState({value: event.target.value});
    //   }

     async handleDepositSubmit(event) {
        //var value = this.state.value;
        this.setState({showSpinner:true});
        await this.sleep(3000);
        this.setState({showSpinner:false});
        var value = 50;
        if(value < 0){
            alert("Please enter a non-negative value!")
        }else{
            this.setState(({ balanceA }) => ({
                balanceA: balanceA + value*1
            }))
            event.preventDefault();
        }
      }


      handleThreadEntry(event) {
        this.setState({toPay: event.target.value});
      }

      handleThreadSubmit(event) {
        //var toPay = this.state.toPay;
        var toPay = 0.05;
        var balanceA = this.state.balanceA;
        var balanceB = this.state.balanceB;
        var txCount = this.state.txCount;

        var txCountUpdate = +(parseFloat(txCount+1).toFixed(0));
        var updateA = +(parseFloat(balanceA-toPay).toFixed(2));
        var updateB = +(parseFloat(balanceB+toPay).toFixed(2));

        if(toPay < 0){
            alert("Please enter a non-negative value!")
        }else if(this.state.balanceA < toPay){
            alert("Insufficient funds! Please deposit more.")
        }else{
            console.log(this.state.balanceA)
            console.log(this.state.balanceB)
            console.log(this.state.toPay)
            this.setState(({ balanceA }) => ({
                balanceA: updateA
            }))
            this.setState(({ balanceB }) => ({
                balanceB: updateB
            }))
            this.setState(({ txCount }) => ({
                txCount: txCountUpdate
            }))
            event.preventDefault();
        }
      }
      handleDrain(event) {
        var price = 0.05;
        var txCount = this.state.txCount;
        var balanceA = this.state.balanceA;
        var totalTx = +(parseFloat(balanceA / price).toFixed(0));
        console.log(this.state.balanceA)
        console.log(this.state.balanceB)
        console.log(this.state.toPay)
        this.setState(({ balanceB }) => ({
            balanceB: (balanceB + balanceA)
        }))
        this.setState(({ balanceA }) => ({
            balanceA: (0)
        }))
        this.setState(({ txCount }) => ({
            txCount: txCount + totalTx
        }))
        }
    
        async cashOut(){
            this.setState({showSpinner:true});
            await this.sleep(3000);
            this.setState({showSpinner:false});
            var balanceB = this.state.balanceB;
            this.setState(({onChainBalanceB}) =>({
                onChainBalanceB: balanceB
            }));
            this.setState(({ balanceB }) => ({
                balanceB: 0
            }));
        }

      render() {
        return(
        <div style={{textAlign:"center",
                    fontWeight:"lighter",
                    fontFamily: "'proxima-nova',sans-serif",
                    color:"#0F1012"}}>
        <div>
            <h3 style={{fontWeight:"lighter",
                        fontFamily: "Comfortaa",
                        color:"#0F1012",
                        fontSize:"36px"}}>How Indra works</h3>
            <br />
            <p  className="subhead" style={{margin:"auto"}}>Let's walk through a typical payment flow</p>
        </div>
        <div className="step-wrapper" style={{display:"flex",}}>
            <div className="step1card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 2px 12px 40px 0 rgba(0, 0, 0, 0.19)",
                            display: "flex",
                            height:"150px"

                            }}>
                <div style={{display:"flex"}}>
                    <div style={{width:"70%", marginLeft:"0%", marginTop:"3%", fontSize:"16px"}}>
                            User 1's Channel Balance 
                            <br />
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                            : <div>
                            <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                                style={{
                                    fontSize:"60px",
                                    fontWeight:"bold",
                                    fontFamily:"comfortaa",
                                    color:"#08B22D",
                                    transition: '0.8s ease-out',
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                duration={500}/> DAI </div>
                                 }
                    </div>
                    <div style={{width:"20%", float:"none", marginTop:"-20%",marginLeft:"-20%"}}>
                        <img src={step1} style={{ width:"250%"}}></img>
                    </div>
                </div>
            </div>
            <div style={{width:"20%"}}>
                <img src={bullet} alt="bullet" />
            </div>
            <div className="step-paragraph" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311",
                                }}>
                    STEP 1
                </h4>
                <p>
                    First, your user deposits funds to their friendly neighborhood Connext Hub. Let's give them a hand. 
                    The example here is 50 DAI, but this could be ETH or any ERC-20 token. Now, watch their channel balance increase.
                </p>
                <button className="demo-button" onClick={this.handleDepositSubmit}>
                    Deposit money to channel
                </button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%", display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>
                    STEP 2
                </h4>
                <p>
                    Now, it's time for your user to pay someone! The counterparty is also connected to the hub, so they can open a thread 
                    and pay them directly. 
                    You'll see one balance increase, and the other decrease.
                </p>
                <button className="demo-button" onClick={this.handleThreadSubmit}>Pay another user</button>
            </div>
            <div style={{width:"20%"}}>
                <img src={bullet} alt="bullet" />
            </div>
            <div xs="5" className="step2card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            height:"150px",
                            display:"flex"}}>
                <div style={{width:"20%", float:"none",marginLeft:"-25%",marginTop:"-7.2%"}}>
                    <img src={step2} style={{ width:"250%"}}></img>
                </div>
                <div style={{float:"right", width:"40%",marginTop:"2%",marginLeft:"30%",fontSize:"16px"}}>
                User 1's <br />Thread Balance <br />
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                    style={{
                        color:"#F22424",
                        fontSize:"60px",
                        fontFamily:"Comfortaa",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={500} /> DAI
                </div>
                <div style={{float:"right",width:"40%",marginTop:"2%",fontSize:"16px"}}>
                User 2's <br /> Thread Balance <br /> 
                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                    style={{
                        color:"#08B22D",
                        fontSize:"60px",
                        fontFamily:"Comfortaa",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#F22424'} 
                    )}
                    duration={500} /> DAI
                </div>
            </div>
        </div>
        <div className="step-wrapper" style={{marginTop:"5%", display:"flex",marginLeft:"-6%"}}>

            <div className="step3card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            display: "flex",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            height:"150px"}}>
                <div style={{marginLeft:"-10%", marginTop:"-8%", width:"15%"}}>
                    <img src={step3} style={{ width:"200%"}}></img>
                </div>
                <div style={{marginLeft:"12%",fontSize:"16px"}}>
                User 1's <br />Thread Balance
                <br />
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                    style={{
                        color:"#F22424",
                        fontSize:"60px",
                        fontFamily:"Comfortaa",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={500} />&nbsp;DAI
                </div>                
                <div style={{marginLeft:"2%",fontSize:"16px",paddingRight:"2%",borderRight:"1px solid #C1C6CE"}}>
                User 2's <br />Thread Balance
                <br />
                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                    style={{
                        color:"#08B22D",
                        fontSize:"60px",
                        fontFamily:"Comfortaa",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }} frameStyle={perc => ( 
                        perc === 100 ? {}:{color: '#F22424'} 
                    )}
                    duration={500} />&nbsp;DAI
                </div>
                <div style={{margin:"auto"}}>Total <br/>transactions
                <br/>
                <AnimatedNumber component="text" value={this.state.txCount} stepPrecision={0}
                    style={{
                        color:"#F22424",
                        fontSize:"60px",
                        fontFamily:"Comfortaa",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }} frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={500} />
                </div>               
            </div>
            <div style={{width:"20%"}}>
                <img src={bullet} alt="bullet" />
            </div>
            <div className="step-paragraph-3" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    STEP 3
                </h4>
                <p>Payments through a Connext Hub are instant and free, so your users can go ahead and pay as frequently
                    as they want. Try making a lot of payments!
                </p>
                <button className="demo-button"onClick={this.handleDrain}>Make more payments</button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%",display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>STEP 4</h4>
                <p style={{textAlign:"right"}}>Now User 2 wants to withdraw their money to use on a dApp that hasn't integrated Connext. Sad face.
                    Press "Cash out" and watch the money flow into their wallet!
                </p>
                <button className="demo-button" onClick={this.cashOut}>Cash out</button>
            </div>
            <div style={{width:"20%"}}>
                <img src={bullet} alt="bullet" />
            </div>
            <div className="step4card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontSize:24,
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            display:"flex",
                            height:"125px"}}>
                <div style={{width:"10%", marginLeft:"-7%", marginTop:"4%"}}>
                    <img src={step4B} alt="step4B" style={{width:"200%"}} />
                </div>
                    <div style={{fontSize:"16px",marginLeft:"10%"}}>
                        User 2's <br />Channel Balance
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                            : 
                            <div>
                                
                                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                                    style={{
                                        color:"#F22424",
                                        fontSize:"60px",
                                        fontFamily:"Comfortaa",
                                        fontWeight:"bold",
                                        transition: '0.8s ease-out',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }} frameStyle={perc => (
                                        perc === 100 ? {}:{color: '#F22424'} 
                                    )}
                                    duration={500} />DAI 
                            </div>
                        }
                    </div>
                    <div style={{marginLeft:"2%",fontSize:"16px"}}>
                        User 2's <br />Wallet Balance
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                        : 
                        <div>
                        <AnimatedNumber component="text" value={this.state.onChainBalanceB} stepPrecision={2}
                            style={{
                                color:"#F22424",
                                fontSize:"60px",
                                fontFamily:"Comfortaa",
                                fontWeight:"bold",
                                transition: '0.8s ease-out',
                                transitionProperty:
                                    'background-color, color, opacity',
                            }} frameStyle={perc => (
                                perc === 100 ? {}:{color: '#08B22D'} 
                            )}
                            duration={500} />&nbsp;DAI
                        </div>
                        }
                    </div>
                    <div style={{width:"20%", float:"none",marginTop:"-15%",marginLeft:"-10%"}}>
                        <img src={step4A} style={{ width:"300%"}}></img>
                    </div>
            </div>
        </div>
        <div style={{marginTop:"5%"}}>
            <button  className="demo-button" outline style={{ margin:"auto"}}>
                <a href="https://docs.connext.network" style={{textDecoration:"none",color:"inherit"}}>
                    Learn More
                </a>
            </button>
        </div>
        </div>
        )
    }
}

export default Demo;