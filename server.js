import path from 'path';
import { Server } from 'http';
import Express from 'express'
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from "./src/app.jsx"

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

const server = new Server(app);

app.get('/', (req, res) => {
  let markup = renderToString(<App/>)
  console.log(markup);
  res.render('index', {markup});
});

server.listen(3000, err => {
  if (err) {
    return console.error(err);
  }
  console.log("Server is running");
})
