import React, { Component} from 'react' 

export default class HelloClass extends Component {
        constructor(){

                super();
                this.state = {
                        count:0
                }
        }

        //state ={
        //        count:0
        //}

        handleCount=()=>{

                this.setState({count:this.state.count+1})
                
        }

        render(){

                return (
                        <div>
                               {/* <button onClick={this.handleCount()}Counter</button> */}
                               <button onClick={this.handleCount}>Counter : {this.state.count}</button>
                        </div>
                )
        
}
}
