import ShoeList from './src/ShoeList.jsx';
import React from 'react';
import { render } from 'react-dom';
import {Map, List, fromJS} from "immutable";

let input = [
  {id: 1, name: "shoeName", price: 10},
  {id: 2, name: "secondShoe", price: 20}
];
var shoeList = fromJS(input);

render(
  <ShoeList shoes={shoeList}/>,
  document.getElementById('root')
)
