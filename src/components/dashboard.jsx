import React, { Component } from "react";
import Candidate from './candidate'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    list_recruits(step){
        return <div className='candidates-list'>
            {this.props.recruits.filter(recruit => recruit.step === step).map(
                recruit => <Candidate {...recruit.candidate}></Candidate>
            )}
        </div>
    }

    render(){
        return (
            <div className='dashboard'>
                <div className='dash-column'>
                    <h1>A rencontrer</h1>
                    {this.list_recruits(0)}
                </div>
                <div className='dash-column'>
                    <h1>Entretien</h1>
                    {this.list_recruits(1)}
                </div>
            </div>
        )
    }
}

export default Dashboard;