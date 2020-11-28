import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import s from './MainWrapper.module.scss'

const MainWrapper = ({ children }) => {
    return (
        <>
            <Header />
            <section className={s.section}>
                <div className="container">
                    {children}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MainWrapper