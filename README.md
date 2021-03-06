
# Sample Nuxt.js

- https://ph36.github.io/sample.gh-pages/
- dep. https://github.com/ph36/docker.node/

Setup
--------

### 毎回必須

HTTPS でクローン

```sh
ghq get https://<user>@github.com/ph36/sample.gh-pages.git
```

Docker コンテナの起動 (事前に ph36/node を作成しておく)

```sh
cat << EOF > .env
# 生成されるファイルのアクセス権を root にしないための対策
UID=${UID}
# ホスト側のポートを指定
PORT=3000
EOF
sudo docker-compose run node --version
sudo docker-compose up -d
sudo docker-compose exec node yarn
```

### 初回設定

新規 Nuxt.js プロジェクトの作成

- `yarn create` でエラーが出たが無視 -> 問題なかった
  - err. `throw new SAOError(Failed to install ${packageName} in ${cwd})`

```sh
sudo docker-compose exec node /bin/sh
yarn create nuxt-app sample
yarn install
# -> ディレクトリ構造の整理を手動実施 (src/sample/ -> src/ に直置き)
```

必要パッケージの導入

```sh
yarn add nuxt-property-decorator
```

Docker 内で Nuxt.js を動かすための設定

```nuxt.config.js
export default {
  server: {
    host: '0.0.0.0'
  }
}
```

(Option) デプロイ先が GitHub Pages の場合は static を指定した方がよい

Develop
--------

### Access

```sh
sudo docker-compose exec node /bin/sh
```

### Build

```sh
# development
sudo docker-compose exec node yarn dev

# productin
sudo docker-compose exec node yarn build
sudo docker-compose exec node yarn start
```

Add Package
--------

Bootstrap (Install: https://bootstrap-vue.org/docs#nuxtjs-module)

```sh
yarn add bootstrap-vue
```

Deploy
--------

- Settings (Tab) > Option (Sidebar) > GitHub Pages (Section)
  - Source Branch: none -> gh-pages (/)
  - gh-pages ブランチは CI で自動生成されるので CI を1回以上実行した後に設定
  - ref. https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-first-deployment-with-github_token
- GITHUB_TOKEN: 設定不要 (自動設定される)
