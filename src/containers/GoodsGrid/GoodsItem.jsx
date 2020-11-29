import React from 'react'
import Button from '../../components/UI/Button/Button'
import s from './GoodsGrid.module.scss'

const GoodsItem = (props) => {
    return (
        <div className={s.grid__item} data-cart={props.itemsInCart+' items in cart'}>
            <img className={s.grid__image} src={props.imgUrl} alt={props.title} />
            <div className={s.grid__wrap_inner}>
                <span className={s.grid__title}>{props.title}</span>
                <Button value={props.id} onClick={props.buttonAddHandler} variant="regular" className={s.grid__button}>
                    Add to cart
                            </Button>
                <Button value={props.id} onClick={props.buttonRemoveHandler} variant="warning" disabled={props.disabled} className={s.grid__button}>
                    Remove
                            </Button>
                <span className={s.grid__price}>{props.price}₴</span>
            </div>
        </div>
    )
}

export default GoodsItem