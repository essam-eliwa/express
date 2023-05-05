
import express from 'express';

const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const html_data = 'Hello SWE ... Week 7. <h1>Test</h1>';

app.get('/', function(req, res){
   res.send(html_data);
});

app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
