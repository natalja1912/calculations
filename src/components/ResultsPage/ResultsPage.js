import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import './ResultsPage.css'

const ResultsPage = ({ result, userName }) => {
  const values = getFormValues('registerForm')(state)

  return (
    <div className="results">
      <p>{`${values} - молодец!`}</p>
      <p>{`Правильных ответов: ${result} `}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    result: state.finalResult,
    userName: state.userName
  }
}

export default connect(mapStateToProps, null)(ResultsPage);