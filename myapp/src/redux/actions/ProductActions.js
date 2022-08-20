import { ActionTypes } from "../contain/ActionTypes";
// Order Adding
export const AddOrder = (item) => {
    return {
        type: ActionTypes.ADD_ORDER,
        payload: { item },

    }
};
// Order Removing
export const RemoveOrder = (item) => {
    return {
        type: ActionTypes.REMOVE_ORDER,
        payload: item,
    }
}
// Product Adding
export const AddProductAction = (item) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload:  item 
    }
}
// Product Detail
export const SingleProduct = (item) => {
    return {
        type: ActionTypes.PRODUCT_DETAIL,
        payload: { item },
    }
}
