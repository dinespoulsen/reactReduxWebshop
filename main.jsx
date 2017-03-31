import ShoeList from './src/ShoeList.jsx';
import React from 'react';
import { render } from 'react-dom';
import {Map, List, fromJS} from "immutable";
import {shoes} from "./shoeData";

var shoeList = fromJS(shoes);

render(
  <ShoeList shoes={shoeList}/>,
  document.getElementById('root')
)
