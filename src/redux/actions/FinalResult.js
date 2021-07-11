import * as ActionTypes from '../actionTypes';

export const FinalResult = (result) => ({
    type: ActionTypes.ADD_RESULT,
    payload: result
});
