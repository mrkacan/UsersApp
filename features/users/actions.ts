import * as types from './types';
import {UserItem} from './types';

const getUsers = (): types.UsersActionTypes => {
    return {
        type: types.GET_USERS,
    };
};

const getUsersSuccess = (data: UserItem[]): types.UsersActionTypes => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: {
            data,
        },
    };
};

const getMovieError = (error: string): types.UsersActionTypes => {
    return {
        type: types.GET_USERS_FAILURE,
        payload: {
            error,
        },
    };
};

const addNewUser = (user: UserItem): types.UsersActionTypes => {
    return {
        type: types.ADD_NEW_USER,
        payload: {
            user
        }
    };
};

export {
    getUsers,
    getUsersSuccess
};
