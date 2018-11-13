import React, { Component } from 'react';
import {Button, Row, Col} from 'reactstrap';
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
        var totalTx = (this.state.balanceA / price*1.0);
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
                            color:"#0F1012"}}>How it works</h3>
                <p>Alice wants to buy some coffee from her favorite cafe, but she needs your help!</p>
            </div>
        <Row style={{marginTop:"5%"}}>
        <Col>
        <div>
        <h4 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#FCA311"}}>STEP 1</h4>
            <p>First, Alice needs to deposit some money to her friendly neighborhood Connext Hub. Let's give her a hand. 
                 Let's give her 50 DAI, but this could be ETH or any ERC20 token. Now, watch her channel balance increase.
            </p>
        </div>
        <Button color="warning" outline style={{color:"#FCA311"}} onClick={this.handleDepositSubmit}>
        Deposit money to Alice's channel
        {/* <form onSubmit={this.handleDepositSubmit}>
           <label>
            Deposit amount: 
            <input type="number" value={this.state.value} onChange={this.handleDepositEntry} />
          </label> 
          <input type="submit" value="Deposit money to Alice's channel" />
        </form>       */}  
        </Button>
        </Col>
        <Col xs="1">
        </Col>
        <Col className="step1card" style={{   border: "5px solid #fff",
                        borderRadius: "10px",
                        boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        display: "block"
                        }}>
        <div style={{paddingTop:"12%"}}>
        { this.state.showSpinner ? <img src={spinner} alt="orange loading spinner" style={{width:"50px"}}/> : 
            <div style={{
                fontWeight:"lighter",
                fontSize:24,
                fontFamily: "'proxima-nova',sans-serif",
                color:"#0F1012"
                }}>
                <img src={greencheck} alt="green check markr" style={{width:"50px", marginBottom:"3%"}}/>
                <br />
                Alice's Channel Balance: &nbsp; 
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                    style={{
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}
                    duration={500} /> DAI
                    </div>}
                </div>
        </Col>
        </Row>
        <Row style={{marginTop:"5%"}}>
        <Col className="step2card" style={{   border: "5px solid #fff",
                        borderRadius: "10px",
                        boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        fontWeight:"lighter",
                        fontSize:24,
                        fontFamily: "'proxima-nova',sans-serif",
                        color:"#0F1012"}}>
        <Row style={{
                paddingTop:"10%"
                }}>
        <Col style={{margin:"auto"}}>
        Cafe's Thread Balance: <br /> 
        <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                fontSize: 24,
                transitionProperty:
                    'background-color, color, opacity'
            }}
            frameStyle={perc => (
                perc === 100 ? {}:{color: '#08B22D'} 
            )}
            duration={500} /> &nbsp;DAI
        </Col>
        <Col style={{margin:"auto"}}>Alice's Thread Balance: <br /> 
        <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                fontSize: 24,
                transitionProperty:
                    'background-color, color, opacity'
            }} frameStyle={perc => (
                perc === 100 ? {}:{color: '#F22424'} 
            )}
            duration={500} /> &nbsp;DAI
        </Col>
        </Row>
        </Col>
        <Col xs="1">
        </Col>
        <Col>
        <div>
        <h4 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#FCA311"}}>STEP 2</h4>
            <p>Now, it's time for Alice buy a coffee! The coffee shop is also connected to the hub, so she can open a thread 
                and pay them directly. 
                Coffee costs 0.05 DAI where she's from, so you can go ahead and buy as much coffee as you want!
                 You'll see the coffee shop's balance increase, and Alice's balance decrease.
            </p>
        </div>
        <Button color="warning" outline style={{color:"#FCA311"}} onClick={this.handleThreadSubmit}>Buy a coffee</Button>
        {/* <form onSubmit={this.handleThreadSubmit}>
          <label>
            Amount to pay:
            <input type="number" value={this.state.toPay} onChange={this.handleThreadEntry} />
          </label> 
          <input type="submit" value="Buy a coffee!" />
        </form>         */}
        </Col>
        </Row>
        <Row style={{marginTop:"5%"}}>
        <Col>
        <div>
        <h4 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#FCA311"}}>STEP 3</h4>
            <p>Alice <span style={{fontStyle:"italic"}}>loves</span> coffee. She wants to spend all of the rest of her money on more cups!
                Press 'buy all the coffee' and watch the transactions fly by.
            </p>
        </div>
        <br />
        <Button color="warning" outline style={{color:"#FCA311"}} onClick={this.handleDrain}>Buy all the coffee</Button>
        </Col>
        <Col xs="1">
        </Col>
        <Col className="step3card" style={{   border: "5px solid #fff",
                        borderRadius: "10px",
                        boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        display: "block",
                        fontWeight:"lighter",
                        fontSize:24,
                        fontFamily: "'proxima-nova',sans-serif",
                        color:"#0F1012"}}>
        <Row>
        <div style={{margin:"auto", paddingTop:"6%"}}>Total transactions: &nbsp;
        <AnimatedNumber component="text" value={this.state.txCount} stepPrecision={0}
            style={{
                transition: '0.8s ease-out',
                transitionProperty:
                    'background-color, color, opacity'
            }} frameStyle={perc => (
                perc === 100 ? {}:{color: '#08B22D'} 
            )}
            duration={500} />
        <br />
        Cafe's Thread Balance: &nbsp;
        <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                transitionProperty:
                    'background-color, color, opacity'
            }} frameStyle={perc => (
                perc === 100 ? {}:{color: '#08B22D'} 
            )}
            duration={500} />&nbsp;DAI
        <br />
        Alice's Thread Balance: &nbsp;
        <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                transitionProperty:
                    'background-color, color, opacity'
            }}frameStyle={perc => (
                perc === 100 ? {}:{color: '#F22424'} 
            )}
            duration={500} />&nbsp;DAI
        </div>
        </Row>
        </Col>
        </Row>
        <Row style={{marginTop:"5%"}}>
        <Col className="step4card" style={{   border: "5px solid #fff",
                        borderRadius: "10px",
                        boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        fontWeight:"lighter",
                        fontSize:24,
                        fontFamily: "'proxima-nova',sans-serif",
                        color:"#0F1012"}}>
            <div style={{paddingTop:"5%"}}>
        { this.state.showSpinner ? <img src={spinner} alt="orange loading spinner" style={{width:"50px"}}/> : 
        <div><img src={greencheck} alt="green check markr" style={{width:"50px",marginBottom:"3%"}}/><br />
        <div>Cafe's Channel Balance: &nbsp;
        <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                transitionProperty:
                    'background-color, color, opacity'
            }} frameStyle={perc => (
                perc === 100 ? {}:{color: '#F22424'} 
            )}
            duration={500} />&nbsp;DAI
        </div>
        <div>Cafe's Wallet Balance: &nbsp;
        <AnimatedNumber component="text" value={this.state.onChainBalanceB} stepPrecision={2}
            style={{
                transition: '0.8s ease-out',
                transitionProperty:
                    'background-color, color, opacity',
            }} frameStyle={perc => (
                perc === 100 ? {}:{color: '#08B22D'} 
            )}
            duration={500} />&nbsp;DAI
        </div>
        </div> } 
        </div>
        </Col>
        <Col xs="1">
        </Col>
        <Col>
        <div>
        <h4 style={{fontWeight:"lighter",
                            fontFamily: "Comfortaa",
                            color:"#FCA311"}}>STEP 4</h4>
            <p>Now the coffee shop wants to take its money out of the channel so they can use it to pay their baristas.
                Press "Cash out" and watch the money flow into the coffee shop's wallet!
            </p>
        </div>
        <br />
        <Button color="warning" outline style={{color:"#FCA311"}} onClick={this.cashOut}>Cash out</Button>
        </Col>
        </Row>
        <Row style={{marginTop:"5%"}}>
            <Button href="https://docs.connext.network" color="warning" outline style={{color:"#FCA311", margin:"auto"}}>Learn More</Button>
        </Row>
        </div>
        )
    }
}

export default Demo;