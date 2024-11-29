import express from 'express';
import cors from 'cors';
import studiosRouter from './routes/studios.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
console.log("hey");
// ルーティング
app.use('/api/studios', studiosRouter);

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});