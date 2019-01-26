import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Todo Listo');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(8000, () => console.log('Servidor iniciado en el puerto 8000'));