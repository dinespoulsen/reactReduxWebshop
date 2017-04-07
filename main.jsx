import Layout from './src/Layout.jsx';
import FrontPage from './src/FrontPage.jsx';
import React from 'react';
import { render } from 'react-dom';
import {Map, List, fromJS} from "immutable";
import {shoeList} from "./shoeData";
import makeStore from './src/store.jsx';
import {Provider} from 'react-redux';
import {setStateAction} from './src/action_creators'
import {Router, Route, browserHistory} from 'react-router';


const store = makeStore();
store.dispatch(setStateAction(shoeList));

export const routes = <Route>
    <Route path="/" component={FrontPage}/>
    <Route path="/cart" component={Layout}/>
  </Route>;

if(typeof window !== 'undefined') {
  render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
  )
}
