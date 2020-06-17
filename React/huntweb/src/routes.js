import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/products';

//BrowserRouter vai definir que estamos utilizando as rotas atraves de um router
//Swictch vai permitir que apenas uma rota seja chamada ao mesmo tempo

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;