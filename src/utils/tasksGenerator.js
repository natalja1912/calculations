const tasksGenerator = (tasksNumber) => {
    const tasks = [];  

    for (let i = 0; i < tasksNumber; i++) {
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
        const sign = Math.round(Math.random());
        tasks.push({ num1: num1, num2: num2, sign: sign })
    }
    return tasks;
}

export default tasksGenerator;