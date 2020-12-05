import express, { json,urlencoded } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded( { extended:true } ))

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

app.use(`/api/${process.env.API_VERSION}`, router);

export default app;


