import React, { Component } from "react";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DashboardColumn from './dashboard_column';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const to_meet = this.props.recruits.filter(recruit => recruit.step === 0);
        const to_interview = this.props.recruits.filter(recruit => recruit.step === 1);
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div className='dashboard'>
                    <DashboardColumn recruits={to_meet} step={0} listType='to_meet'/>
                    <DashboardColumn recruits={to_interview} step={1} listType='to_interview'/>
                </div>
            </DragDropContextProvider>
        )
    }
}

export default Dashboard;