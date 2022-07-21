import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/contato', (req: Request, res: Response) => {
  res.send('formulario de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
  res.send('pagina sobre a empresa');
});

export default router;