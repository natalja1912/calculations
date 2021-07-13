import { connect } from 'react-redux'
import ResultsListItem from './parts/ResultsListItem/ResultsListItem';
import './ResultsPage.css'

const ResultsPage = ({ resultValues, userName }) => {
  const rightAnswersNumber = resultValues.filter(item => item.right === 1).length;

  return (
    <div className="results">
      <p>{`${userName} - молодец!`}</p>
      <p>{`Правильных ответов: ${rightAnswersNumber} `}</p>
      <ul className="results__list">
        {resultValues.map((item, index) =>
          <li key={index}>
            <ResultsListItem
              task={item.task}
              right={item.right}
              result={item.result} /></li>)}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    resultValues: state.finalResult,
    userName: state.userName
  }
}


export default connect(mapStateToProps, null)(ResultsPage);