import React, { Component } from "react";
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        return {
            id: props.recruit_id
        };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult) {
            //put here api call to change step
            console.log('drop', item, dropResult);
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