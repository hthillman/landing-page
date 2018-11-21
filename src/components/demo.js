import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import './demo.css';
import spinner from '../assets/spinner.gif';
import greencheck from '../assets/greencheck.png';

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
        <div >
            <h3 style={{fontWeight:"lighter",
                        fontFamily: "Comfortaa",
                        color:"#0F1012",
                        fontSize:"36px"}}>How it works</h3>
            <br />
            <p style={{width:"30%", margin:"auto"}}>Alice wants to buy some coffee from her favorite cafe, but she needs your help!</p>
        </div>
        <div className="step-wrapper" style={{marginTop:"5%",
                                                marginLeft:"10%",                     
                                                display:"flex",}}>
            <div className="step1card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 2px 12px 40px 0 rgba(0, 0, 0, 0.19)",
                            display: "block",
                            height:"8%"
                            }}>
                <div style={{display:"flex"}}>
                    <div style={{width:"70%", marginLeft:"0%", marginTop:"3%", fontSize:"16px"}}>
                            Alice's <br />Channel Balance 
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
                    <div style={{width:"20%", float:"none"}}>
                        <img src={greencheck} style={{ width:"100%"}}></img>
                    </div>
                </div>
            </div>
            <div style={{width:"20%"}}>
            </div>
            <div className="step-paragraph" style={{textAlign:"left",flexGrow:"0",flexShrink:"0"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    STEP 1
                </h4>
                <p>
                    First, Alice needs to deposit some money to her friendly neighborhood Connext Hub. Let's give her a hand. 
                    Let's give her 50 DAI, but this could be ETH or any ERC20 token. Now, watch her channel balance increase.
                </p>
                <button className="demo-button" onClick={this.handleDepositSubmit}>
                    Deposit money to Alice's channel
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
                    Now, it's time for Alice buy a coffee! The coffee shop is also connected to the hub, so she can open a thread 
                    and pay them directly. 
                    Coffee costs 0.05 DAI where she's from, so you can go ahead and buy as much coffee as you want!
                    You'll see the coffee shop's balance increase, and Alice's balance decrease.
                </p>
                <button className="demo-button" onClick={this.handleThreadSubmit}>Buy a coffee</button>
            </div>
            <div style={{width:"20%"}}>
            </div>
            <div xs="5" className="step2card" style={{   border: "5px solid #fff",
                            borderRadius: "10px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            height:"8%",
                            display:"flex"}}>
                <div style={{width:"20%"}}>
                    <img src={greencheck} style={{ width:"100%"}}></img>
                </div>
                <div style={{marginTop:"2%",fontSize:"16px"}}>
                Cafe's <br /> Thread Balance <br /> 
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
                <div style={{marginTop:"2%",fontSize:"16px"}}>
                Alice's <br />Thread Balance <br />
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
            </div>
        </div>
        <div className="step-wrapper" style={{marginTop:"5%", display:"flex",marginLeft:"-5%"}}>

            <div className="step3card" style={{   border: "5px solid #fff",
                            borderRadius: "10px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            display: "flex",
                            flexGrow:"1",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012"}}>
                <div style={{marginLeft:"2%", width:"20%"}}>
                    <img src={greencheck} style={{ width:"100%"}}></img>
                </div>
                <div style={{marginLeft:"2%",fontSize:"16px"}}>
                Alice's <br />Thread Balance
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
                Cafe's <br />Thread Balance
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
                <div style={{marginLeft:"4%"}}>Total <br/>transactions
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
            </div>
            <div className="step-paragraph" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    STEP 3
                </h4>
                <p>Alice <span style={{fontStyle:"italic"}}>loves</span> coffee. She wants to spend all of her money on more cups!
                    Press 'buy all the coffee' and watch the transactions fly by.
                </p>
                <button className="demo-button"onClick={this.handleDrain}>Buy all the coffee</button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%",display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>STEP 4</h4>
                <p style={{textAlign:"right"}}>Now the coffee shop wants to take its money out of the channel so they can use it to pay their baristas.
                    Press "Cash out" and watch the money flow into the coffee shop's wallet!
                </p>
                <button className="demo-button" onClick={this.cashOut}>Cash out</button>
            </div>
            <div style={{width:"20%"}}>
            </div>
            <div className="step4card" style={{   border: "5px solid #fff",
                            borderRadius: "10px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontSize:24,
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            display:"flex"}}>
                <div style={{width:"5%"}}></div>
                    <div style={{fontSize:"16px"}}>
                        Cafe's <br />Channel Balance
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
                        Cafe's <br />Wallet Balance
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
                    <div style={{width:"20%", float:"none"}}>
                        <img src={greencheck} style={{ width:"100%"}}></img>
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