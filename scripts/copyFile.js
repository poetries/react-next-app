const fs = require( 'fs' ),
    stat = fs.stat;

const path = require('path')

const includeFiles = ['package.json','server.js','next.config.js','deploy-dev.json','deploy-prod.json']

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
const readDir = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( filename ){
            var _src = src + '/' + filename,
                _dst = dst + '/' + filename,
                readable, writable;

            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile()){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory()){
                    copyDir( _src, _dst, readDir );
                }
            });
        });
    });
};

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
const copyDir = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};

const copyFile = ()=>{
  includeFiles.forEach(filename=>{
    fs.createReadStream(path.join(__dirname,'../'+filename)).pipe(fs.createWriteStream(path.join(__dirname,'../deployBuildFiles',filename)))
    console.log('拷贝完成!')
  })
}

// 复制目录
copyDir( 'build', 'deployBuildFiles/build', readDir);

// 拷贝文件
copyFile()
