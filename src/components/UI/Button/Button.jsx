import React from 'react'
import s from './Button.module.scss'

const Button = (props) => {
    const onClickHandler = (e) => {
        props.onClick && props.onClick(e)
    }
    const className = `${props.variant !== 'warning' ? s.button : `${s.button} ${s.warning}`} ${props.className || ''} text--md`
    return (
        <button disabled={props.disabled || false} className={className} value={props.value} onClick={onClickHandler}>{props.children}</button>
    )
}

export default Button