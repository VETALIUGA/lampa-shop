import React from 'react'
import Button from '../Button/Button'
import s from './RangeButtons.module.scss'

const RangeButtons = (props) => {
    return (
        <div className={s.wrap}>
            <Button
                value={props.value}
                onClick={props.removeHandler}
            >{props.titleRemove}</Button>
            <Button
                value={props.value}
                onClick={props.addHandler}
            >{props.titleAdd}</Button>
        </div>
    )
}

export default RangeButtons