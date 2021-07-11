import { Tasks } from '..'
import { getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import getFinalResult from '../../utils/getFinalResult';
import { FinalResult } from '../../redux/actions/FinalResult';
import './TasksMain.css'

let TasksMain = ({ state, tasks, addResult }) => {
  let history = useHistory()

  /*достаем из формы taskForm все заполненные поля
  (результаты вычислений) и проверяем их количество*/
  const values = getFormValues('taskForm')(state)
  let valuesLength;
  values ? valuesLength = Object.keys(values).length : valuesLength = 0;

  function handleSubmit() {
    history.push("/results");
    const rightAnswersNumber = getFinalResult(tasks, values);
    addResult(rightAnswersNumber);
  }

  return (
    <div className="calculations">
      <h1 className="calculations__heading">Проверьте свои знания</h1>
      <Tasks tasks={tasks} />
      {(!values || valuesLength !== 10) &&
        <div className="form__error">Решите все примеры</div>
      }
      {(values && valuesLength === 10) ?
        <button className="form__button form__button_active" onClick={handleSubmit}>Готово!</button>
        : <div className="form__button form__button_inactive">Готово!</div>
      }
    </div>

  )
}

function mapStateToProps(state) {
  return {
    state: state,
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addResult: result => dispatch(FinalResult(result))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksMain)