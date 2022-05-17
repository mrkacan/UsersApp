import {combineReducers} from 'redux';
import {reducer as usersReducer} from './movies/reducers';

const reducer = combineReducers({
    users: usersReducer,
});

export {reducer};
