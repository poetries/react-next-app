> `PM2`部署应用流程，通过`pm2`的配置文件来部署
> http://pm2.keymetrics.io/docs/usage/deployment/

## 一、配置部署脚本文件

> 在项目根目录添加`pm2`的部署脚本文件 `ecosystem.json`

```nginx
{
  "apps": [
      {
        "name": "goodsapp", //pm2运行的应用名称
        "script": "server.js",//服务启动入口
        "env":{
            "COMON_VARIABLE": "true"
        },
        "env_production": {
            "NODE_ENV": "production", //env
            "HOST": "localhost"
        }
      }
  ],
  "deploy": {
      // 应用名称，可以自定义，最后这样使用 pm2 deploy ecosystem.json goodsapp
      "goodsapp": {
          "user": "user_00",// 服务器用户名
          "host": ['192.68.1.201'],//服务器ip地址 可写多个
          "ref": "origin/master",//从指定分支拉取代码
          "repo": "http://p.yesdat.com/diffusion/49/goodsh.git",
          "path": "/data/poetry/testDir/prev-goods.yesdat.com", //上传本地目录到服务器
          "ssh_options": "StrictHostKeyChecking=no",
          "post-deploy": "npm install --registry=https://registry.npm.taobao.org && npm install && pm2 startOrRestart ecosystem.json --env production",//部署脚本
          "env": {
              "NODE_ENV": "production"
          }
      }
  }
}
```


## 二、部署Nginx配置规则

> 在`nginx`安装目录下的`vhost`中新建一个`xx-3000.conf`的配置文件

```nginx
upstream goodsapp { // website项目的目录名称
  server 127.0.0.1:3000; // 服务器上的本地启动入口，端口对应项目中server.js中的端口
}

// 配置server
server {
    listen 80;
    server_name prev-goods.yesdat.com; //指向的域名

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;

        proxy_pass http://goodsapp; // 请求将会转发到goodsapp的node服务下
        proxy_redirect off;
    }

    // 处理静态资源
    location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt) {
        root /data/goodsapp/static; //请求转发到静态资源路径
    }
}
```

## 三、本地项目根执行的命令

- `pm2 deploy ecosystem.json goodsapp setup` 初始化
- `pm2 deploy ecosystem.json goodsapp` 部署
