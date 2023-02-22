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
                this.setState({b:"5"});

        }

        changeVals=()=>{

                this.setState({c:"6"});

        }

        changeValss=()=>{

            this.setState({d:"2"});

        }

        render(){

            var sum = this.state.a * this.state.b * this.state.c + this.state.d ;

                return(
                        <>
                        <button onClick={this.changeVal}>Click Here</button>
                        <h1>{sum}</h1>

                        <button onClick={this.changeVals}>Click Here</button>
                        {/* <h1>{sum}</h1> */}

                        <button onClick={this.changeValss}>Click Here</button>
                        {/* <h1>{sum}</h1> */}
    




                        </>
                );
        }
        
}

export default Formula;