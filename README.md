
# Sample Nuxt.js

Setup
--------

Docker のセットアップ

```sh
cat << 'EOF' >> .env
USER=${USER}
EOF
sudo docker-compose build
sudo docker-compose run node --version
sudo docker-compose up -d
```

新規 Nuxt.js プロジェクトの作成

- `yarn create` でエラーが出たが無視 -> 問題なかった
  - err. `throw new SAOError(Failed to install ${packageName} in ${cwd})`

```sh
sudo docker-compose exec node /bin/sh
yarn create nuxt-app sample
yarn install
# -> ディレクトリ構造の整理を手動実施 (src/sample/ -> src/ に直置き)
```

Docker 内で Nuxt.js を動かすための設定

```nuxt.config.js
export default {
  server: {
    host: '0.0.0.0'
  }
}
```

Run
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
