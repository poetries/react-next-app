const fs = require('fs');
const path = require('path');
const OSS = require('ali-oss');

const filePath = path.join(__dirname,'../outCDN');
const excludeFiles = ['index.html']

const client = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: ''
});

// 遍历文件夹中所有文件
async function uploadFile(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,async function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(async function(filename){
                //获取当前文件的绝对路径
                const filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,async function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        const isFile = stats.isFile();//是文件
                        const isDir = stats.isDirectory();//是文件夹
                        if(!excludeFiles.includes(filename) && isFile){
                            const fileKey = `${filedir.split('outCDN/').pop()}`

                            try {
                                // object表示上传到OSS的Object名称，localfile表示本地文件或者文件路径
                                let data = await client.put(fileKey,filedir);

                                console.error('upload success: %j', data);
                            } catch(err) {
                                console.error('upload failed: %j', err);
                            }
                        }
                        if(isDir){
                            uploadFile(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}


uploadFile(filePath)
