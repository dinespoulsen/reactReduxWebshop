import path from 'path';
import { Server } from 'http';
import Express from 'express'
import React from 'react';
import {renderToString} from 'react-dom/server';
import ShoeList from "./src/ShoeList.jsx"
import {Map, List, fromJS} from "immutable";

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));


let input = [
  {id: 1, name: "shoeName", price: 10},
  {id: 2, name: "secondShoe", price: 20}
];
var shoeList = fromJS(input);

app.get('/', (req, res) => {
  let markup = renderToString(<ShoeList shoes={shoeList}/>)
  res.render('index', {markup});
});

const port = process.env.PORT || 3000;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log("Server is running on port " + String(port));
})
