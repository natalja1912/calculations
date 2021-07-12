import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'

const Tasks = ({tasks}) => {

    function handleSubmit(data) {
        console.log(data)
    }
    return (
        <div className="tasks">
            {tasks && <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <TaskItem
                            onSubmit={handleSubmit}
                            task={task}
                            index={index}
                        />
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default Tasks;