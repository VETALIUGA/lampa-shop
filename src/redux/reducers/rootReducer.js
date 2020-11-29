import { combineReducers } from "redux"
import goods_reducer from './goods-reducer'
import cart_reducer from './cart-reducer'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({ 
    goods:goods_reducer,
    cart: cart_reducer,
    form: formReducer
 });