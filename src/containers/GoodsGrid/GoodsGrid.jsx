import React, { useEffect, useState } from 'react'
import s from './GoodsGrid.module.scss'
import { database } from '../../firebase'
import Button from '../../components/UI/Button/Button'


const GoodsGrid = (props) => {
    const [goods, setGoods] = useState('')
    useEffect(() => {
        database.ref('/goods/').once('value').then((snapshot) =>
            setGoods(snapshot.val())
        )
        console.log(goods);
    }, [])
    return (
        <div className={s.grid}>
            {goods &&
                goods.map(item => (
                    <div className={s.grid__item} key={item.id}>
                        <img className={s.grid__image} src={item.imgUrl} alt="" />
                        <div className={s.grid__wrap_inner}>
                            <span className={s.grid__title}>{item.title}</span>
                            <Button title="До кошика" />
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default GoodsGrid