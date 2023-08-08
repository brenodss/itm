import express from 'express';
import productsRoute from './routes/productsRoute';
import requestsRoute from './routes/requestsRoute'
import bodyParser from 'body-parser'
import sessionMiddleware from './middlewares/sessionMiddleware';

const app = express();
app.use(bodyParser.json());

app.use('/produtos', sessionMiddleware, productsRoute);
app.use('/pedidos', sessionMiddleware, requestsRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});