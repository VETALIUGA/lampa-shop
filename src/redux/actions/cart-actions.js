import { ADD_NEW_GOOD_TO_CART, GET_GOODS_FROM_STORAGE, REMOVE_GOODS_FROM_CART, REMOVE_GOOD_FROM_CART } from "./actionTypes"

export const addNewGoodToCart = (goodItem) => {
    return {
        type: ADD_NEW_GOOD_TO_CART,
        payload: goodItem
    }
}

export const removeGoodFromCart = (id) => {
    return {
        type: REMOVE_GOOD_FROM_CART,
        payload: id
    }
}

export const addGoodsFromStorage = () => {
    return {
        type: GET_GOODS_FROM_STORAGE
    }
}

export const removeGoodsFromCart = () => {
    return {
        type: REMOVE_GOODS_FROM_CART
    }
}
