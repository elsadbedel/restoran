import { ActionTypes } from "../contain/ActionTypes";
// import { initialState } from "./DisplayProduct";

export const orderReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_ORDER:
            return {
                ...state,
                state: [...state, action.payload]
            }
        default:
            return state
    }
}