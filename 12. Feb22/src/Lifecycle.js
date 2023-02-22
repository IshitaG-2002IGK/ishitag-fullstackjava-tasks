import React from 'react';

class Lifecycle extends React.Component{

        constructor(props){
                super(props);
                this.state={
                        number:5
                };
        }

        // forceUpdate(){

        //     console.log("forceUpdate");
        //     this.setState({nuumber:50});
        // }

        componentDidMount(){

                console.log("Lifecycle component is mounted " + this.state.number);
                console.log(this.props.a);
        }

        static getDerivedStateFromProps(props,state){

                console.log("This is the derived state "+ props.a);

        }

        getSnapshotBeforeUpdate(prevProps, prevState){

            console.log("PrevState "+prevState.number);
            console.log("PrevProps "+prevProps.a);

        }

        componentDidUpdate(){

            console.log("Current State "+this.state.number);

        }

        shouldComponentUpdate(){

            // return false;
            return true;
        }

        componentWillUnmount(){

            console.log("Images unmounted");
        }

        changeNum=()=>{
            
            this.setState({number:4});
        }


        render(){

                // this.forceUpdate();
                return(
                        <div>
                        <h1>LifeCycle Component Phases</h1>
                        <button onClick={this.changeNum}>Click here</button>
                        <h1>{this.state.number}</h1>
                        </div>
                );
        }
}

export default Lifecycle;