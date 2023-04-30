
import express from 'express';

const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const html_data = 'Hello SWE230 ... Week 7';

app.get('/', function(req, res){
   res.send(html_data);
});

app.listen(3000, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
