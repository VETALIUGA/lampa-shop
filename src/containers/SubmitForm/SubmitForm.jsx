import React, { useState } from 'react'
import s from './SubmitForm.module.scss'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { removeGoodsFromCart } from '../../redux/actions/cart-actions'

const SubmitForm = (props) => {
    const [json, setJson] = useState('')
    const submit = (value) => {
        const confirmJson = {
            ...value,
            ...props.cart
        }
        props.onRemoveGoodsFromCart()
        setJson(JSON.stringify(confirmJson, null, 2))
    }
    const { handleSubmit, pristine, submitting } = props
    return (
        <>
            <h2 className={`text--lg ${s.title}`}>Order selected goods</h2>
            <form className={s.form} onSubmit={handleSubmit(submit)}>
                <div className={s.form__item}>
                    <label className={`text--sm ${s.form__label}`}>Enter first name</label>
                    <div>
                        <Field
                            className={s.form__input}
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="first name"
                            required
                        />
                    </div>
                </div>
                <div className={s.form__item}>
                    <label className={`text--sm ${s.form__label}`}>Enter last name</label>
                    <div>
                        <Field
                            className={s.form__input}
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="last name"
                            required
                        />
                    </div>
                </div>
                <div className={s.form__item}>
                    <label className={`text--sm ${s.form__label}`}>Enter address</label>
                    <div>
                        <Field
                            className={s.form__input}
                            name="address"
                            component="input"
                            type="text"
                            placeholder="address"
                            required
                        />
                    </div>
                </div>
                <div className={s.form__item}>
                    <label className={`text--sm ${s.form__label}`}>Enter phone</label>
                    <div>
                        <Field
                            className={s.form__input}
                            name="phone"
                            component="input"
                            type="tel"
                            placeholder="phone"
                            required
                        />
                    </div>
                </div>
                <div>
                    <button className={s.form__button} type="submit" disabled={pristine || submitting || !props.cart.goodsInCart.length}>
                        <span>Order</span>
                    </button>
                </div>
            </form>
            {json &&
                <code>{json}</code>
            }
        </>
    )
}

const mapStateToProps = state => {
    const { cart } = state
    return {
        cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveGoodsFromCart: () => dispatch(removeGoodsFromCart())
    }
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(connect(mapStateToProps, mapDispatchToProps)(SubmitForm))