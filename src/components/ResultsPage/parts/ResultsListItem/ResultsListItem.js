import './ResultsListItem.css'

const ResultsListItem = ({ task, result, right }) => {
    const textClassName = `result__text ${!right && `result__text_red`}`;

    return (<div className='result'>
        <div className='result__text-group'>
            <p className={textClassName}>{task.num1}</p>
            <p className={textClassName}>{task.sign === 1 ? ' + ' : ' - '}</p>
            <p className={textClassName}>{`${task.num2} =`}</p>
            <p className={textClassName}>{result}</p>
        </div>
    </div>)
}
export default ResultsListItem