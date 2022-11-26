import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import mainRouter from './routes/mainRouter.js';

const app = express();

app.use(cors());
app.use(json());
app.use(mainRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
