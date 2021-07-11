import tasksGenerator from '../../utils/tasksGenerator';
import TASKS_NUMBER from '../../utils/constants';

const TASKS = tasksGenerator(TASKS_NUMBER);

export const Tasks = (state = TASKS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
