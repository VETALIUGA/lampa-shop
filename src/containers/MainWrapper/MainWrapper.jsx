import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { addGoodsFromStorage } from '../../redux/actions/cart-actions'
import s from './MainWrapper.module.scss'

const MainWrapper = ({ children, onAddGoodsFromStorage }) => {
    useEffect(() => {
        onAddGoodsFromStorage()
    }, [])
    return (
        <>
            <div className={s.outer__wrap}>
                <Header />
                <section className={s.section}>
                    <div className={`container ${s.container}`}>
                        {children}
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

const mapStateToProps = dispatch => {
    return {
        onAddGoodsFromStorage: () => dispatch(addGoodsFromStorage())
    }
}

export default connect(null, mapStateToProps)(MainWrapper)