import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

export default (
    <Switch>
        <Route
            exact
            path='/'
            component={HomePage}
        />
        <Route
            exact
            path='/cart'
            component={CartPage}
        />
    </Switch>
)