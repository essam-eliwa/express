import express from "express";
import ejs from "ejs";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

//Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/ejs-test', function(req, res) {
  let data = { 
    name: 'Yahia Khalid', 
    age: 21, 
    city: 'Cairo',
    favorite_food: 'Pizza'
  };
  res.render('pages/index', { data: data });
});

app.get('/about', function(req, res) {

  res.render('pages/about');
});

app.get('/loop', function(req, res) {
  let browsers = [
    { name: 'chrome', org: "Google", share: "62%"},
    { name: 'Safari', org: "Apple", share: "24%"},
    { name: 'Edge', org: "Microsoft", share: "5%"}
  ];

  let tagline = "Browsers and their market share";
  res.render('pages/loop', { browsers: browsers, tagline: tagline });

});


app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/ejs-test`);
    console.log(`Server running at local dirname :  ${__dirname})  `);
  });
