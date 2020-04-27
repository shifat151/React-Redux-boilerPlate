import CounterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducer=combineReducers({
    counter:CounterReducer,
    isLogged:loggedReducer
});

export default allReducer;
