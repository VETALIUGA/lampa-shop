import { ADD_NEW_GOOD_TO_CART, GET_GOODS_FROM_STORAGE, REMOVE_GOOD_FROM_CART, REMOVE_GOODS_FROM_CART } from "../actions/actionTypes";

const initialState = {
    goodsInCart: [],
    cartSum: 0,
    commonAmount: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_GOOD_TO_CART: {
            const { goodsInCart } = state
            const currentIndex = goodsInCart.findIndex(({ id }) => id === action.payload.id)
            if (currentIndex === -1) {
                goodsInCart.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    amount: 1
                })

            } else {
                goodsInCart[currentIndex] = {
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    amount: ++goodsInCart[currentIndex].amount
                }
            }
            setGoodsToLocalStorage(goodsInCart)
            return {
                ...state,
                goodsInCart: goodsInCart,
                cartSum: countCommonPrice(goodsInCart),
                commonAmount: countCommonAmount(goodsInCart)
            }
        }

        case REMOVE_GOOD_FROM_CART: {
            const currentIndex = state.goodsInCart.findIndex(({ id }) => id === action.payload)
            state.goodsInCart[currentIndex].amount = state.goodsInCart[currentIndex].amount - 1
            if (state.goodsInCart[currentIndex].amount === 0) {
                state.goodsInCart.splice(currentIndex, 1)
            }
            setGoodsToLocalStorage(state.goodsInCart)
            return {
                ...state,
                cartSum: countCommonPrice(state.goodsInCart),
                commonAmount: countCommonAmount(state.goodsInCart)
            }
        }

        case REMOVE_GOODS_FROM_CART: {
            console.log('remove');
            localStorage.removeItem('goodsInCart')
            return {
                ...initialState
            }
        }

        case GET_GOODS_FROM_STORAGE: {
            const cartFromStorage = JSON.parse(localStorage.getItem('goodsInCart')) || []
            return {
                ...state,
                goodsInCart: cartFromStorage,
                cartSum: countCommonPrice(cartFromStorage),
                commonAmount: countCommonAmount(cartFromStorage)
            }
        }

        default:
            return state;
    }
}

const countCommonPrice = (goodsInCart) => {
    let newPrice = 0
    goodsInCart.map(({ price, amount }) => newPrice += price * amount)
    return newPrice
}

const countCommonAmount = (goodsInCart) => {
    let commonAmount = 0
    if (goodsInCart.length) {
        goodsInCart.map(item => commonAmount += item.amount)
    } else {
        commonAmount = 0
    }
    return commonAmount
}

const setGoodsToLocalStorage = (goodsInCart) => {
    localStorage.setItem('goodsInCart', JSON.stringify(goodsInCart))
}