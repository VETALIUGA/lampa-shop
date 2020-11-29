import React, { useEffect } from 'react'
import s from './GoodsGrid.module.scss'
import { connect } from 'react-redux'
import { cleanGoods, getGoods } from '../../redux/actions/goods-actions'
import { addNewGoodToCart, removeGoodFromCart } from '../../redux/actions/cart-actions'
import GoodsItem from './GoodsItem'


const GoodsGrid = (props) => {
    useEffect(() => {
        props.onGetGoods()
    }, [])
    const buttonAddHandler = (e) => {
        const cartItem = props.goodsArr.find(({ id }) => id === +e.target.value)
        props.onAddNewGoodToCart(cartItem)
    }

    const buttonRemoveHandler = (e) => {
        props.onRemoveGoodFromCart(+e.target.value)
    }

    const itemsInCart = (id) => {
        const item = props.goodsInCart.find((item) => id === item.id) || {}
        return item.hasOwnProperty('amount') ? item.amount : 0
    }
    return (
        props.isLoading ?
            <div className={s.loader__wrap}>
                <span className={`text--md ${s.loader}`}>Loading...</span>
            </div>
            :
            <div className={s.grid}>
                {props.goodsArr.map((item) => (
                    <GoodsItem
                        {...item}
                        key={item.id}
                        disabled={!itemsInCart(item.id)}
                        buttonAddHandler={(e) => buttonAddHandler(e)}
                        buttonRemoveHandler={(e) => buttonRemoveHandler(e)}
                        itemsInCart={itemsInCart(item.id)}
                    />
                ))}
            </div>
    )
}

const mapStateToProps = ({ goods, cart }) => {
    return {
        ...goods,
        ...cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetGoods: () => dispatch(getGoods()),
        onCleanGoods: () => dispatch(cleanGoods()),
        onAddNewGoodToCart: (goodItem) => dispatch(addNewGoodToCart(goodItem)),
        onRemoveGoodFromCart: (id) => dispatch(removeGoodFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsGrid)