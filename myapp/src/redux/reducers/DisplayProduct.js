import data from '../../CustomData/data'
import { ActionTypes } from "../contain/ActionTypes";

export const initialState = {
    items: data,
    productDetail: [],
    ordersItems: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ORDER:
            return {
                ...state,
                ordersItems: [...state.ordersItems, action.payload]
            }
        case ActionTypes.REMOVE_ORDER:
            console.log({ action })
            return {
                ...state,
                ordersItems: state.ordersItems.filter(({ item }) =>
                    item.name !== action.payload
                )
            }
        case ActionTypes.PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: [action.payload.item]
            }
        case ActionTypes.ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state
    }
}

