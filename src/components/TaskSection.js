import '../styles/taskSection.css'
import TaskItem from './TaskItem';

function TaskSection(props) {
    
    return(
        <div class="section-task">
            <h3>Da sind deine ausstehenden Aufgaben</h3>
            <ul>
                {props.taskItems.map( (task, index) => {
                    return(
                        <TaskItem 
                            key={index}
                            id={index}
                            text={task}
                            onDelete={props.onDelete}/>
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default TaskSection;
