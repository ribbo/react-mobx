import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Home from './views/Home'
import Layouts from './views/Layouts'
import Account from './views/Account'

const Navigation = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/layouts' component={Layouts} />
            <Route exact path='/account' component={Account} />
            {/* catch-all */}
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>
)

export default Navigation
