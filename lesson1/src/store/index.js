import { createStore, applyMiddleware } from '../kRedux'

function countReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }

}

const store = createStore(countReducer, applyMiddleware(logger))

export default store;

function logger() {
    return dispatch => action => {
        console.log('点击了事件action', action.type);

    }
}

function chunk({ getState, dispatch }) {
    return dispatch => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        } else {
            return dispatch(action)
        }
    }
}