import React from 'react'
import { Helmet } from 'react-helmet'
import MainWrapper from '../../containers/MainWrapper/MainWrapper'
import GoodsGrid from '../../containers/GoodsGrid/GoodsGrid'

const HomePage = (props) => {
    return (
        <>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <MainWrapper>
                <GoodsGrid />
            </MainWrapper>
        </>
    )
}

export default HomePage