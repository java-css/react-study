export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState = 0
    let currentListeners = []
    function getState(params) {
        return currentState
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(listener => listener())

    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    dispatch({ type: '@INIT' })
    return {
        getState,
        dispatch,
        subscribe,
    }
}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = store.dispatch
        const middlewareApi = {
            getState: store.getState,
            dispatch
        }
        const middwaresChain = middlewares.map(middleware => middleware(middlewareApi))
        dispatch = compose(...middwaresChain)(dispatch)
        return {
            ...store,
            dispatch

        }
    }
}
function compose(...funs) {
    if (funs.length === 0) {
        return arg => arg
    }
    if (funs.length === 1) {
        return funs[0]
    }
    return funs.reduce((a, b) => (...args) => a(b(...args)))
}
