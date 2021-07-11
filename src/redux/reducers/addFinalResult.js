import * as ActionTypes from '../actionTypes';

export const addFinalResult = (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESULT:
            return action.payload;
        default:
            return state;
    }
};
