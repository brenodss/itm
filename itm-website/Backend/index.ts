import express, { Request, Response, NextFunction } from 'express';
import productsRoute from './routes/productsRoute';
import validateSession from './session/valideteSession';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());

app.use('/produtos', async (req: any, res: Response, next: NextFunction) => {
    const session = await validateSession()
    req.session = session
    next()
}, productsRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});