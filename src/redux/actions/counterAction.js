import * as actionTypes from "./actionType";

export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1,
})
export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: 1,
})
export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2,
})
export const multiple = () => ({
    type: actionTypes.MULTIPLE,
    payload: 3,
})
export const multipleValue = (value) => ({
    type: actionTypes.MULTIPLEVALUE,
    payload: value,
})