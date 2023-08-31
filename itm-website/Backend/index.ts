import express from 'express';
import productsRoute from './routes/productsRoute';
import requestsRoute from './routes/requestsRoute'
import bodyParser from 'body-parser'
import sessionMiddleware from './middlewares/sessionMiddleware';
import errorMiddleware from './middlewares/errorMiddleware';
import registerRoute from './routes/registerRoute';

const app = express();
app.use(bodyParser.json());

app.use('/produto', sessionMiddleware, productsRoute);
app.use('/pedidos', sessionMiddleware, requestsRoute);
app.use('/register',  registerRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});