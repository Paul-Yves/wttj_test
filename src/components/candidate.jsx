import React, { Component } from "react";
import { DragSource } from 'react-dnd';
import axios from 'axios';

/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        return {
            id: props.recruit_id,
            oldStep: props.step
        };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult && item.oldStep !== dropResult.step) {
            axios.post('recruitment/'+item.id+'/edit', {
                step: dropResult.step,
                authenticity_token: window._token
            })
            .then(function (response) {
                // todo maybe do the change here?
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Candidate extends Component{
    render(){
        const { isDragging, connectDragSource, name } = this.props;
        return connectDragSource(
            <div className='candidate' style={{ opacity: isDragging ? 0.5 : 1 }}>
                {name}
            </div>
        );
    }
}
// Export the wrapped component:
export default DragSource('CANDIDATE', cardSource, collect)(Candidate);