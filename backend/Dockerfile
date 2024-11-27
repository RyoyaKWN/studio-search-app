# ベースイメージ
FROM node

# 環境変数を設定
ENV NODE_ENV=development

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# パッケージをインストール（devDependenciesも含む）
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# サーバーを起動
CMD ["npm", "start"]

# ポートを公開
EXPOSE 5000
