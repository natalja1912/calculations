import * as ActionTypes from '../actionTypes';

export const addUserName = (state = 'Аноним', action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER_NAME:
            return action.payload;
        default:
            return state;
    }
};