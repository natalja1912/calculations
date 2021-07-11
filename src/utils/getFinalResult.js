function getFinalResult(tasks, values) {
    let rightAnswers = 0;
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let name = `task${i}`
        let result = values[name];
        result = Number.parseInt(result);
        let answer;
        task.sign < 1 ? answer = task.num1 - task.num2 : answer = task.num1 + task.num2;
        answer === result && rightAnswers++;
    }

    return rightAnswers;
}

export default getFinalResult;