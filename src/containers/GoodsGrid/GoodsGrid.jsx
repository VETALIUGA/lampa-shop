import React, { useEffect, useState } from 'react'
import s from './GoodsGrid.module.scss'
import { database } from '../../firebase'


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
                    <div className={s.grid__item} key={item.id}>{item.title}</div>
                ))}
        </div>
    )
}

export default GoodsGrid