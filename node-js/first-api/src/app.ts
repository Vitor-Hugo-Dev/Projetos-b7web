import express from 'express';
import mainRoutes from './routes/index';

const port = 3000;
const app = express();

app.use(mainRoutes);

app.listen(port, () => console.log(`server run on ${port}`));