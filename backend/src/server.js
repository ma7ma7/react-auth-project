import express from 'express';
import { routes } from './routes';
import { initializeDBConnection } from './db';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

initializeDBConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Lestning on Port ${PORT} 🚀`);
  });
});
