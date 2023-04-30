import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

//Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

let data = { 
  name: 'Yahia Khalid', 
  age: 21, 
  city: 'Cairo',
  favorite_food: 'Pizza'
};

app.get('/data', function(req, res) {
  let template = fs.readFileSync('./temp.html', 'utf-8');
  template = template.replace('[name]', data.name);
  template = template.replace('[age]', data.age);
  template = template.replace('[city]', data.city);
  template = template.replace('[food]', data.favorite_food);
  res.send(template);
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/data`);
    console.log(`Server running at local dirname :  ${__dirname})  `);
  });
