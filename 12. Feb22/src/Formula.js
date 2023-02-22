import React from "react";

class Formula extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        a:12, 
                        b:30, 
                        c:25, 
                        d:56
                 };
        }

        changeVal=()=>{
                // this.setState({a:"10"}); 
                this.setState({a:"1"});

        }


        changeVals=()=>{
                // this.setState({a:"10"}); 
                this.setState({b:"5"});

        }

        changeValss=()=>{

                this.setState({c:"6"});

        }

        changeValsss=()=>{

            this.setState({d:"2"});

        }

        render(){

            var sumMul = this.state.a * this.state.b * this.state.c + this.state.d ;

                return(
                        <>
                        <h1>Answer: {sumMul}</h1>
                        <button onClick={this.changeVal}>Click Here</button>
                        <br></br><br></br>

                        <button onClick={this.changeVals}>Click Here</button>
                        <br></br><br></br>


                        <button onClick={this.changeValss}>Click Here</button>
                        <br></br><br></br>

                        <button onClick={this.changeValsss}>Click Here</button>
                        <br></br><br></br>

            
    
                        </>
                );
        }
        
}

export default Formula;