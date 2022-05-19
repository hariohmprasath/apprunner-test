import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
