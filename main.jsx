import Layout from './src/Layout.jsx';
import FrontPage from './src/FrontPage.jsx';
import CartPage from './src/CartPage.jsx';
import React from 'react';
import { render } from 'react-dom';
import {Map, List, fromJS} from "immutable";
import {shoeList} from "./shoeData";
import makeStore from './src/store.jsx';
import {Provider} from 'react-redux';
import {setStateAction} from './src/action_creators'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


const store = makeStore();
store.dispatch(setStateAction(shoeList));

export const routes = <Route path="/" component={Layout}>
    <IndexRoute component={FrontPage}></IndexRoute>
    <Route path="/cart" component={CartPage}/>
  </Route>;

if(typeof window !== 'undefined') {
  render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
  )
}
