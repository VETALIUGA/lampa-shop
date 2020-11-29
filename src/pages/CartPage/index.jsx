import React from 'react'
import { Helmet } from 'react-helmet'
import MainWrapper from '../../containers/MainWrapper/MainWrapper'
import CartGoodsList from '../../containers/CartGoodsList/CartGoodsList'
import SubmitForm from '../../containers/SubmitForm/SubmitForm'
import s from './CartPage.module.scss'

const CartPage = (props) => {
    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <MainWrapper>
                <div className={s.grid}>
                    <div className={s.grid__item}>
                        <CartGoodsList />
                    </div>
                    <div className={s.grid__item}>
                        <SubmitForm />
                    </div>
                </div>
            </MainWrapper>
        </>
    )
}

export default CartPage