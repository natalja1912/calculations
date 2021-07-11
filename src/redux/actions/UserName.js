import * as ActionTypes from '../actionTypes';

export const UserName = (name) => ({
    type: ActionTypes.ADD_USER_NAME,
    payload: name
});
