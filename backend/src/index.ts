import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('バックエンドサーバーが動作しています！');
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
