import { database } from "../../firebase"
import { CLEAN_GOODS, GET_GOODS_REQUEST_FAILURE, GET_GOODS_REQUEST_STARTED, GET_GOODS_REQUEST_SUCCESS } from "./actionTypes"

export const getGoods = () => {
    return dispatch => {
        dispatch(getGoodsStarted())
        database.ref('/goods/')
        .once('value')
        .then((snapshot) =>{
            dispatch(getGoodsSuccess(snapshot.val()))
        }).catch((err) => {
            dispatch(getGoodsFailure(err))
        })
    }
}

const getGoodsStarted = () => {
    return {
        type: GET_GOODS_REQUEST_STARTED
    }
}

const getGoodsSuccess = (goods) => {
    return {
        type: GET_GOODS_REQUEST_SUCCESS,
        payload: goods
    }
}

const getGoodsFailure = (err) => {
    return {
        type: GET_GOODS_REQUEST_FAILURE,
        payload: err
    }
}

//////////////////////////////////////////////////

export const cleanGoods = () => {
    return {
        type: CLEAN_GOODS
    }
}
