import React from 'react'
import s from './Footer.module.scss'

const Footer = (props) => {
    return (
        <section className={s.section}>
            <div className="container">
                <span className={`text--md ${s.heading}`}>Scooter shop ©</span>
            </div>
        </section>
    )
}

export default Footer