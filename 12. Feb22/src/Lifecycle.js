import React from 'react';

class Lifecycle extends React.Component{

        constructor(props){
                super(props);
                this.state={
                        number:4
                };
        }
        componentDidMount(){
                console.log("Lifecycle component is mounted " + this.state.number);
                console.log(this.props.a);
        }

        static getDerivedStateFromProps(props,state){

                console.log("This is the derived state "+ props.a);

        }

        render(){
                return(
                        <h1>Hi</h1>
                );
        }
}

export default Lifecycle;