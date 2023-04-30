import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const html_data = `Hello SWE230 ... Week 7 <br>
__dirname: ${__dirname} <br>
`;

app.get("/", function (req, res) {
  res.send(html_data);
});

app.get("/calc", function (req, res) {
    res.sendFile(path.join(__dirname, "calculator.html"));
  });

  app.use(express.urlencoded());

  app.post('/calc', function(req, res){
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let operator = req.body.operator;
    let answer = 0;
    switch(operator){
        case 'add':
            answer = num1 + num2;
            break;
        case 'sub':
            answer = num1 - num2;
            break;
        case 'mul':
            answer = num1 * num2;
            break;
        case 'div':   

            if(num2 == 0){
                answer = "Error: Divide by zero";
            }else{
                answer = num1 / num2;
            }
            break;
        default:
            res.send(`You just called the post method at  "${__filename}"!  num1 = ${req.body.num1} num2 = ${req.body.num2}
            `); 
    }
    res.send(`<h1>You just called the post method num1 = ${req.body.num1} num2 = ${req.body.num2} operator = ${req.body.operator}</h1>
    <br> <h2>Answer is = ${answer}</h2>
    `);

    // res.send(`You just called the post method at 
    // "${__filename}"!  num1 = ${req.body.num1} num2 = ${req.body.num2}
    // <br> Answer is = ${parseInt(req.body.num1) + parseInt(req.body.num2)}
    // `);
    
    console.log(req.body);
  });

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running at local dirname :  ${__dirname})  `);
});
