import React, { Component } from "react";
import { DropTarget } from 'react-dnd';

import Candidate from './candidate'

const cardTarget = {
    drop({listType, step}) {
        return { step: step }
    },
}
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
}
class DashboardColumn extends Component{

    list_recruits(recruits){
        return <div className='candidates-list'>
            {recruits.map(
                recruit => <Candidate { ...recruit.candidate } recruit_id={recruit.id}
                                      step={recruit.step} key={recruit.id}/>
            )}
        </div>
    }

    title(){
        if(this.props.step === 0){
            return 'A rencontrer'
        }
        return 'Entretien';
    }

    render(){
        const { canDrop, isOver, connectDropTarget } = this.props
        const isActive = canDrop && isOver

        let backgroundColor = 'white';
        if (isActive) {
            backgroundColor = 'darkgreen';
        } else if (canDrop) {
            backgroundColor = 'darkkhaki';
        }

        return connectDropTarget(<div className='dash-column' style={{ backgroundColor }}>
            <h1 className='step-title'>{this.title()} <span className='badge'>{this.props.recruits.length}</span></h1>
            {this.list_recruits(this.props.recruits)}
        </div>)
    }
}
export default DropTarget('CANDIDATE', cardTarget, collect)(DashboardColumn);
// export default DashboardColumn;