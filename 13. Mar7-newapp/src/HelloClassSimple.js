//Simple functions

import React, { Component} from 'react' 

export default class HelloClassSimple extends Component {
        constructor(props){

                super(props);

                this.handleCount = this.handleCount.bind(this)

                this.state = {
                        count:0
                }
        }

        handleCount=()=>{

                this.setState({count:this.state.count+1})
                
        }

        render(){

                return (
                        <div>
                               {/* <button onClick={this.handleCount()}Counter</button> */}
                               <button onClick={this.handleCount}>Simple Function Counter : {this.state.count}</button>
                        </div>
                )
        
}
}
