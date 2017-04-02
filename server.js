import path from 'path';
import { Server } from 'http';
import Express from 'express'
import React from 'react';
import {renderToString} from 'react-dom/server';
import Layout from './src/Layout.jsx';
import {Map, List, fromJS} from "immutable";
import {shoeList} from "./shoeData";
import makeStore from './src/store.jsx';
import {Provider} from 'react-redux';
import {setStateAction} from './src/action_creators'

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

const store = makeStore();
store.dispatch(setStateAction(shoeList));


app.get('/', (req, res) => {
  let markup = renderToString(<Provider store={store}><Layout /></Provider>)
  res.render('index', {markup});
});

const port = process.env.PORT || 3000;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log("Server is running on port " + String(port));
})
