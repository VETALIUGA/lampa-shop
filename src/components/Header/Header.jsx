import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'

const Header = (props) => {
    return (
        <section>
            <div className="container">
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <Button title="Cart" />
                </Link>
            </div>
        </section>
    )
}

export default Header