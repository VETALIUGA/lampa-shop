import React from 'react'
import { connect } from 'react-redux'
import RangeButtons from '../../components/UI/RangeButtons/RangeButtons'
import { addNewGoodToCart, removeGoodFromCart } from '../../redux/actions/cart-actions'
import s from './CartGoodsList.module.scss'

const CartGoodsList = (props) => {
    const buttonAddHandler = (e) => {
        const cartItem = props.goodsArr.find(({ id }) => id === +e.target.value)
        props.onAddNewGoodToCart(cartItem)
    }

    const buttonRemoveHandler = (e) => {
        props.onRemoveGoodFromCart(+e.target.value)
    }
    return (
        <>
            <h2 className={`text--lg ${s.title}`}>Selected goods</h2>
            {props.goodsInCart.length ?
                <table className={s.grid}>
                    <thead>
                        <tr className={s.grid__item} >
                            <th>Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.goodsInCart.map((item) => (
                                <tr className={s.grid__item} key={item.id}>
                                    <td className={`text--md`}>{item.title}</td>
                                    <td>{item.price}&nbsp;₴</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <RangeButtons
                                            value={item.id}
                                            titleRemove="-"
                                            titleAdd="+"
                                            removeHandler={buttonRemoveHandler}
                                            addHandler={buttonAddHandler}
                                        />
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
                :
                <h3 className={`text--sm ${s.empty__text}`}>No selected goods</h3>}
                <h2 className={`text--lg ${s.total}`}>Total: {props.cartSum} ₴</h2>
        </>
    )
}

const mapStateToProps = ({ goods, cart }) => {
    return {
        ...cart,
        ...goods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNewGoodToCart: (goodItem) => dispatch(addNewGoodToCart(goodItem)),
        onRemoveGoodFromCart: (id) => dispatch(removeGoodFromCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartGoodsList)