---
Sort: 2
title: 2-LobeChat设置
description: 本文将以docker-compose的部署方式为例，介绍如何设置私有化部署lobechat的DB版本。
date: 2025-04-08T17:59:03+08:00
tags:
  - Lobe_Chat
  - AI-Tools
isOriginal: false
author: "TinyChen"
articleLink: https://tinychen.com/20250126-lobechat_user_db_mode_deploy/
articleGPT: 本文介绍了如何设置docker-compose私有化部署LobeChat DB版，包括数据库配置、身份验证服务（Clerk 或 NextAuth）配置、S3 存储服务（MinIO）配置以及部署方式。
---

# Lobe-Chat 数据库版本设置

## 1.1 配置casdoor

使用 `setup.sh` 脚本启动后，Casdoor WebUI 默认端口为 `8000` ，你可以通过 `http://your_server_ip:8000` 访问，默认用户名和密码不要看lobechat官方文档里面的指示，不一定是对的，建议查看初始化过程中生产的 `init_data.json` 文件，里面有user字段，包含用户的用户名和密码，例如我这里的用户名和密码字段为：

```json
"name": "admin",
"password": "bac064",
```
[![](https://resource.tinychen.com/202502021947815.png)](https://resource.tinychen.com/202502021947815.png)

在 `身份认证 -> 应用` 中找到lobechat

[![](https://resource.tinychen.com/202502021947936.png)](https://resource.tinychen.com/202502021947936.png)

找到 `重定向URLs` 这个配置，修改里面的localhost为我们的服务器IP

```
http://your_server_ip:3210/api/auth/callback/casdoor
```
[![](https://resource.tinychen.com/202502021947539.png)](https://resource.tinychen.com/202502021947539.png)

其他配置大多保持默认即可，你也可以在 `身份认证 -> 应用` 中修改默认配置

## 1.2 配置 MinIO S3

使用 `setup.sh` 脚本启动后，MinIO WebUI 默认端口为 `9001` ，你可以通过 `http://your_server_ip:9001` 访问，默认用户名 `YOUR_MINIO_USER` ，密码 `YOUR_MINIO_PASSWORD`

密码是存储在初始化配置里面的`.env` 文件中的，可以查看里面的字段获得

```bash
root@infra-ubuntu:~/lobechat# cat .env | grep MINIO
MINIO_PORT=9000
MINIO_ROOT_USER=YOUR_MINIO_USER
MINIO_ROOT_PASSWORD=YOUR_MINIO_PASSWORD
MINIO_LOBE_BUCKET=lobe
```

登录进去之后，我们可以看到已经创建给 lobechat 使用的 bucket ，这里再创建一个 bucket 给 casdoor 使用

[![](https://resource.tinychen.com/202502021947287.png)](https://resource.tinychen.com/202502021947287.png)

这里我们创建一个 `casdoor` 的bucket，注意如果修改了名字，下面配置中的 `casdoor` 也要一并修改。

[![](https://resource.tinychen.com/202502021947050.png)](https://resource.tinychen.com/202502021947050.png)

创建成功之后点击进去bucket详情，在Summary里面，点击 **Access Policy** ，选择 **custom** ，贴入下面的内容，然后保存

[![](https://resource.tinychen.com/202502021947087.png)](https://resource.tinychen.com/202502021947087.png)
```json
{
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["*"]
      },
      "Action": ["s3:GetBucketLocation"],
      "Resource": ["arn:aws:s3:::casdoor"]
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["*"]
      },
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::casdoor"],
      "Condition": {
        "StringEquals": {
          "s3:prefix": ["files/*"]
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["*"]
      },
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"],
      "Resource": ["arn:aws:s3:::casdoor/**"]
    }
  ],
  "Version": "2012-10-17"
}
```

然后我们创建一个 **AccessKey**

[![](https://resource.tinychen.com/202502021948379.png)](https://resource.tinychen.com/202502021948379.png) [![](https://resource.tinychen.com/202502021948020.png)](https://resource.tinychen.com/202502021948020.png) [![](https://resource.tinychen.com/202502021948768.png)](https://resource.tinychen.com/202502021948768.png)

注意退出这个页面之后不能再查看 **SecretKey** 的内容，需要保存好密钥，如下所示为之前创建的密钥。

```
tfIcV3Gl7CjcHJkh5OsZ
DuNmfJykcoFTVp8Tl3DEzIE20Jvvl9ii5N2pUn5p
```

在 Casdoor 的 `身份认证 -> 提供商` 中关联 MinIO S3 服务，注意分类要选择Storage，客户端 ID、客户端密钥为上一步创建的访问密钥中的 `Access Key` 和 `Secret Key` ， `10.31.100.3` 应当被替换为实际部署MinIO服务的服务IP。

以下是一个示例配置：

[![](https://resource.tinychen.com/202502021948437.png)](https://resource.tinychen.com/202502021948437.png)

在 Casdoor 的 `身份认证 -> 应用` 中，对 `app-built-in` 应用添加提供商，选择 `minio` ，保存并退出

[![](https://resource.tinychen.com/202502021948986.png)](https://resource.tinychen.com/202502021948986.png)

我们可以在 Casdoor 的 `身份认证 -> 资源` 中，尝试上传文件以测试配置是否正确

[![](https://resource.tinychen.com/202502021948958.png)](https://resource.tinychen.com/202502021948958.png)

也可以直接测试是否可以修改头像，在用户管理里面，选择用户，然后点击编辑，就可以修改头像了。

[![](https://resource.tinychen.com/202502021948213.png)](https://resource.tinychen.com/202502021948213.png)

## 1.3 配置文件

最后附上完整的配置文件作为参考，注意里面的配置参数（如IP地址、持久化映射目录、密钥等需要自行修改）

`docker-compose.yml` 文件内容如下

```yaml
root@infra-ubuntu:~/lobechat# cat docker-compose.yml
name: lobe-chat-database
services:
  network-service:
    image: alpine
    container_name: lobe-network
    ports:
      - '${MINIO_PORT}:${MINIO_PORT}' # MinIO API
      - '9001:9001' # MinIO Console
      - '${CASDOOR_PORT}:${CASDOOR_PORT}' # Casdoor
      - '${LOBE_PORT}:3210' # LobeChat
    command: tail -f /dev/null
    networks:
      - lobe-network

  postgresql:
    image: pgvector/pgvector:pg16
    container_name: lobe-postgres
    ports:
      - '5432:5432'
    volumes:
      - './data:/var/lib/postgresql/data'
    environment:
      - 'POSTGRES_DB=${LOBE_DB_NAME}'
      - 'POSTGRES_PASSWORD=${POSTGRES_PASSWORD}'
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U postgres']
      interval: 5s
      timeout: 5s
      retries: 5
    restart: always
    networks:
      - lobe-network

  minio:
    image: minio/minio
    container_name: lobe-minio
    network_mode: 'service:network-service'
    volumes:
      - './s3_data:/etc/minio/data'
    environment:
      - 'MINIO_ROOT_USER=${MINIO_ROOT_USER}'
      - 'MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD}'
      - 'MINIO_API_CORS_ALLOW_ORIGIN=http://10.31.100.3:${LOBE_PORT}'
    restart: always
    command: >
      server /etc/minio/data --address ":${MINIO_PORT}" --console-address ":9001"

  casdoor:
    image: casbin/casdoor
    container_name: lobe-casdoor
    entrypoint: /bin/sh -c './server --createDatabase=true'
    network_mode: 'service:network-service'
    depends_on:
      postgresql:
        condition: service_healthy
    environment:
      RUNNING_IN_DOCKER: 'true'
      driverName: 'postgres'
      dataSourceName: 'user=postgres password=${POSTGRES_PASSWORD} host=postgresql port=5432 sslmode=disable dbname=casdoor'
      origin: 'http://10.31.100.3:${CASDOOR_PORT}'
      runmode: 'dev'
    volumes:
      - ./init_data.json:/init_data.json

  lobe:
    image: lobehub/lobe-chat-database
    container_name: lobe-chat
    network_mode: 'service:network-service'
    depends_on:
      postgresql:
        condition: service_healthy
      network-service:
        condition: service_started
      minio:
        condition: service_started
      casdoor:
        condition: service_started

    environment:
      - 'APP_URL=http://10.31.100.3:3210'
      - 'NEXT_AUTH_SSO_PROVIDERS=casdoor'
      - 'KEY_VAULTS_SECRET=Kix2wcUONd4CX51E/ZPAd36BqM4wzJgKjPtz2sGztqQ='
      - 'NEXT_AUTH_SECRET=NX2kaPE923dt6BL2U8e9oSre5RfoT7hg'
      - 'AUTH_URL=http://10.31.100.3:${LOBE_PORT}/api/auth'
      - 'AUTH_CASDOOR_ISSUER=http://10.31.100.3:${CASDOOR_PORT}'
      - 'DATABASE_URL=postgresql://postgres:${POSTGRES_PASSWORD}@postgresql:5432/${LOBE_DB_NAME}'
      - 'S3_ENDPOINT=http://10.31.100.3:${MINIO_PORT}'
      - 'S3_BUCKET=${MINIO_LOBE_BUCKET}'
      - 'S3_PUBLIC_DOMAIN=http://10.31.100.3:${MINIO_PORT}'
      - 'S3_ENABLE_PATH_STYLE=1'
      - 'LLM_VISION_IMAGE_USE_BASE64=1'
    env_file:
      - .env
    restart: always

volumes:
  data:
    driver: local
  s3_data:
    driver: local

networks:
  lobe-network:
    driver: bridge
```

`.env` 文件内容如下

```
root@infra-ubuntu:~/lobechat# cat .env
# Proxy, if you need it
# HTTP_PROXY=http://localhost:7890
# HTTPS_PROXY=http://localhost:7890

# Other environment variables, as needed. You can refer to the environment variables configuration for the client version, making sure not to have ACCESS_CODE.
# OPENAI_API_KEY=sk-xxxx
# OPENAI_PROXY_URL=https://api.openai.com/v1
# OPENAI_MODEL_LIST=...

# ===========================
# ====== Preset config ======
# ===========================
# if no special requirements, no need to change
LOBE_PORT=3210
CASDOOR_PORT=8000
MINIO_PORT=9000

# Postgres related, which are the necessary environment variables for DB
LOBE_DB_NAME=lobechat
POSTGRES_PASSWORD=uWNZugjBqixf8dxC

# Casdoor secret
AUTH_CASDOOR_ID=a387a4892ee19b1a2249
AUTH_CASDOOR_SECRET=85db9fa40ab8155d26fed8c179906933

# MinIO S3 configuration
MINIO_ROOT_USER=YOUR_MINIO_USER
MINIO_ROOT_PASSWORD=YOUR_MINIO_PASSWORD

# Configure the bucket information of MinIO
MINIO_LOBE_BUCKET=lobe
S3_ACCESS_KEY_ID=soaucnP8Bip0TDdUjxng
S3_SECRET_ACCESS_KEY=ZPUzvY34umfcfxvWKSv0P00vczVMB6YmgJS5J9eO
```

另外需要注意的是 `init_data.json` 这个文件是 `casdoor` 组件初始化过程中产生的，存储着不少重要信息，切记不要随意删除。

---