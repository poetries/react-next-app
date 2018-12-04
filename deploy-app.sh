#!/bin/bash

# scp -P 36000  -r deployBuildFils/** user_00@192.168.1.201:/home/data/services/goods-prev.yesdat.com
 #scp -P 36000  -r deployBuildFils/.next user_00@192.168.1.201:/home/data/services/goods-prev.yesdat.com

# 上传生成的文件到码云
cd deployBuildFiles
git init
git remote add origin https://gitee.com/Poetries1/goods-prev.yesdat.com.git
git add -A 
git commit -m update
git push -f origin master

 echo '====上传完毕===='