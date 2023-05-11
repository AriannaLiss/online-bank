const defaultState = {
    cash: 5,
}

export const INCREMENT = "ADD_CASH"
export const ASYNC_INCREMENT = "ASYNC_ADD_CASH"
export const DECREMENT = "GET_CASH"
export const ASYNC_DECREMENT = "ASYNC_GET_CASH"


export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, cash: state.cash + action.payload}
        case DECREMENT:
            return {...state, cash: state.cash - action.payload}
        default:
            return state 
    }
}

export const incrementCreator = (payload=1) => ({type: INCREMENT, payload})
export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const decrementCreator = (payload=1) => ({type: DECREMENT, payload})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})
