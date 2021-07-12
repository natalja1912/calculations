import { connect } from 'react-redux'
import './ResultsPage.css'

const ResultsPage = ({ result, userName }) => {

  return (
    <div className="results">
      <p>{`${userName} - молодец!`}</p>
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