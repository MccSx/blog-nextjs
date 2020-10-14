## 启动数据库

```bash
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

```

## 清空之前的开发环境

```bash
docker ps
docker kill <容器id>
docker rm <容器id>

rm -rf blog-data
# or
docker container prune
docker volume rm blog-data
```

## 创建数据库

```bash
docker exit -it <容器id> bash
psql -U blog

CREATE DATABASE xxx ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

## 开发

```bash
yarn dev
# or
npm run dev
```

## 部署

```bash
yarn build
yarn start
```
