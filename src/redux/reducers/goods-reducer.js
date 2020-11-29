import { CLEAN_GOODS, GET_GOODS_REQUEST_FAILURE, GET_GOODS_REQUEST_STARTED, GET_GOODS_REQUEST_SUCCESS } from "../actions/actionTypes";

const initialState = {
    goodsArr: [],
    isLoading: false,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GOODS_REQUEST_STARTED: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_GOODS_REQUEST_SUCCESS: {
            return {
                ...state,
                goodsArr: action.payload,
                isLoading: false
            };
        }
        case GET_GOODS_REQUEST_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        case CLEAN_GOODS: {
            return {
                ...initialState
            }
        }
        default:
            return state;
    }
}