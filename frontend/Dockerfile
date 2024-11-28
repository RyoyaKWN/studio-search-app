# ベースイメージ
FROM node:14-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# パッケージをインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "start"]

# ポートを公開
EXPOSE 3000
