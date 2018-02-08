import React, { Component } from "react";
class Candidate extends Component{
    render(){
        return <div className='candidate'>
            {this.props.name}
        </div>
    }
}
export default Candidate;