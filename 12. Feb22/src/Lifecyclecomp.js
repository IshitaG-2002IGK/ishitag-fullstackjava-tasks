// numbers algorithmic addition and multiplication


import React from 'react';

class Lifecycle extends React.Component{

        constructor(props){
                super(props);
                this.state={
                        number1 : 6,
                        number2 : 9
                };
        }

        // forceUpdate(){

        //     console.log("forceUpdate");
        //     this.setState({nuumber:50});
        // }

        componentDidMount(){

                console.log("Lifecycle component is mounted " + this.state.number1);
                console.log(this.props.a);
        }

        static getDerivedStateFromProps(props,state){

                console.log("This is the derived state "+ props.a);

        }

        getSnapshotBeforeUpdate(prevProps, prevState){

            console.log("PrevState "+prevState.number1);
            console.log("PrevProps "+prevProps.a);

        }

        componentDidUpdate(){

            console.log("Current State "+this.state.number1);

        }

        shouldComponentUpdate(){

            // return false;
            return true;
        }

        componentWillUnmount(){

            console.log("Images unmounted");
        }

        changeNum=()=>{
            
            this.setState({number1:10});
        }


        render(){

                // this.forceUpdate();

                return(
                        <div>

                        <h1>LifeCycle Component Phases</h1>
                        <button onClick={this.changeNum}>Click here</button>
                        {/* <h1>{this.state.number1}</h1> */}
                        <h1>Sum: {this.state.number1 + this.state.number2}</h1>
                        <h1>Multiplication: {this.state.number1 * this.state.number2 }</h1>

                        </div>
                );
        }
}

export default Lifecycle;