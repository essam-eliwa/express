
import express from 'express';

const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const html_data = '<h1> Routing in Express</h1>';

app.get('/', function(req, res){
  res.send('Home');
});

app.get('/hello', function(req, res){
  res.send(html_data);
});

app.get('/par/:id', function(req, res){
  res.send(`<h1>The id you specified is ${req.params.id}</h1>`);
});


app.get('/add/:num1/:num2', function(req, res) {
  let num3= Number(req.params.num1 )+ Number(req.params.num2);
  res.send(`<p>The id you specified is ${num3}</p>`);
  //res.send(``);
});

app.get('/data/:name/:id', function(req, res) {
  res.send(`<p>The id you specified is ${req.params.id}</p>
  <p>The name you specified is ${req.params.name}</p>
  `);
  //res.send(``);
});



// http://127.0.0.1:3000/par/2

// Using postman or cURL to test post method
app.post('/hello', function(req, res){
  res.send(" You just called the post method at '/hello'!\n");
});
// curl -X POST "http://localhost:3000/hello"
app.use(express.json());


app.post('/test', function(req, res){ 
  res.send(`You just called the post method at "/test"!  
  title = ${req.body.title}
  <br> /your id is: ${req.body.id}
  `);
  console.log(req.body);

});

app.listen(3000, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);


// curl -H 'Content-Type: application/json' \
//       -d '{ "title":"miu", "id": 42}' \
//       -X POST http://127.0.0.1:3000/test
