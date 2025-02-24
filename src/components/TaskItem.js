import React, { useState } from "react";
function TaskItem(props) {
    
    const [isCompleted, setIsCompleted] = useState(false);
    function toggleCompleted() {
        setIsCompleted(!isCompleted);
    }

    return (
        <li className={isCompleted && "completed"} id={props.id}>
            <i className="far fa-circle co" onClick={toggleCompleted}></i>
            <p className="text">{props.text}</p>
            <i className="fas fa-trash de"
                onClick={ () => {
                    props.onDelete(props.id);
                }}>
            </i> 
        </li>
    )
}


export default TaskItem;