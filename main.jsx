import {ShoeListContainer} from './src/ShoeList.jsx';
import React from 'react';
import { render } from 'react-dom';
import {Map, List, fromJS} from "immutable";
import {shoeList} from "./shoeData";
import makeStore from './src/store.jsx';
import {Provider} from 'react-redux';
import {setStateAction} from './src/action_creators'

const store = makeStore();
store.dispatch(setStateAction(shoeList));

render(
  <Provider store={store}>
    <ShoeListContainer />
  </Provider>,
  document.getElementById('root')
)
