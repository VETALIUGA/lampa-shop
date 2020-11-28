import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.wrap}>
                    <Link className={`${s.logo} text--lg`} to="/">Scooter shop</Link>
                    <div className={s.nav__list}>
                        <Link className={s.nav__item} to="/">Home</Link>
                        <Link className={s.nav__item} to="/cart">
                            <Button title="Cart" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header