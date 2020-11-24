import React from 'react'
import Header from '../Header/Header'
import s from './MainWrapper.module.scss'

const MainWrapper = ({ children }) => {
    return (
        <>
            <Header />
            <section className={s.section}>
                {children}
            </section>
        </>
    )
}

export default MainWrapper