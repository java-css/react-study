export function createStore(reducer) {
    let currentState = undefined
    let currentListeners = []
    function getState(params) {
        return currentState
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.map(listener => listener())

    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe,
    }
}