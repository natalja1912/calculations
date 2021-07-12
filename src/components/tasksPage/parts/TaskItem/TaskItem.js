import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from '../CustomField/CustomField'
import validate from '../../../../utils/numbersValidation'
import './TaskItem.css'

let TaskItem = ({ task, index, handleSubmit }) => {

    return <form onSubmit={handleSubmit}>
        <div className="task">
            <div className="task__text-group">            
                <p className='task__text'>{task.num1}</p>
                <p className='task__text'>{task.sign === 1 ? ' + ' : ' - '}</p>
                <p className='task__text'>{`${task.num2} =`}</p></div>
            <Field name={`task${index}`}
                component={CustomField}
                type="number"
            />
        </div>
    </form>
}

TaskItem = reduxForm({
    form: 'taskForm',
    validate
})(TaskItem)


export default TaskItem;