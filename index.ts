import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import path from 'path';

config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.static('pages/login'));



app.get('/', (req: Request, res: Response) => {
  res.sendFile('login.html', { root: path.join(__dirname, '..', 'pages', "login") });
});

app.get('/U2FmZWhvdXNl', (req: Request, res: Response) => {
  res.sendFile('login.html', { root: path.join(__dirname, '..', 'pages', "login") });
});


app.post('/login', (req: Request, res: Response) => {
  console.log(req)
  if(req.body.password == "1234") {
    console.log("Login successfull")
  }
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});