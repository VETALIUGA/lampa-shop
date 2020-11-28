import React from 'react'
import s from './Button.module.scss'

const Button = ({title}) => {
    return (
        <button className={`${s.button} text--md`}>{title}</button>
    )
}

export default Button