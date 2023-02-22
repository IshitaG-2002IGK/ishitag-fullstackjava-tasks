import React from "react";

class Cube extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        r:2, 
                        b:3, 
                        h:5, 
                        pi:3.14
                 };
        }
        changePi=()=>{
                this.setState({pi:"5"}); 
                // this.setState({r:"5", b:"2", h:"6"});

        }
        render(){

                return(
                        <>
                        <button onClick={this.changePi}>Click Here</button>
                        <h1>Cube: {this.state.pi * this.state.r * this.state.b * this.state.h}</h1>
                        </>
                );
        }
        
}

export default Cube;