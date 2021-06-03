import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products/Products';
import ProductDetails from './productDetails/ProductDetails';
import NotFound from './utils/NotFound/NotFound';

const Pages = () => {
    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/product/:id" component={ProductDetails} />
            
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
