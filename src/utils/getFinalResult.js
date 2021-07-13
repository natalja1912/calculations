export function getResultsArray(tasks, values) {
    const resultArray = [];
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let name = `task${i}`
        let result = values[name];
        result = Number.parseInt(result);
        let answer;
        task.sign < 1 ? answer = task.num1 - task.num2 : answer = task.num1 + task.num2;
        answer === result ? resultArray.push({task, result, right: 1}) : resultArray.push({task, result, right: 0});
    }

    return resultArray;
}

