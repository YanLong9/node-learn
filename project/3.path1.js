/*
 * @Author: YanLong
 * @Date: 2022-09-15 17:52:40
 * @LastEditTime: 2022-09-19 19:46:42
 * @LastEditors: YanLong
 * @Description: 
 */
const path = require('path')
const fs = require('fs')

// __dirname关键字获取文件目录的绝对路径
console.log(__dirname) //  >>>/Users/yanlong/youzan/personal/node/project

// 动态路径拼接问题
fs.readFile("./testFile/a.js", 'utf-8', (err, data) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log('content:' + data)

})

// 动态路径拼接问题----解决
fs.readFile(`${__dirname}/testFile/a.js`, 'utf-8', (err, data) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log('content:' + data)

})

// 路径拼接  ../ 会抵消前面的一层路径  ./ 会被忽略
let pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr) // >>>/a/d/e

pathStr = path.join(__dirname, `./testFile/a.js`)
console.log(pathStr) // >>>/Users/yanlong/youzan/personal/node/project/testFile/a.js

pathStr = path.join(__dirname, `../project/testFile/a.js`)
console.log(pathStr) // >>>/Users/yanlong/youzan/personal/node/project/testFile/a.js

/*

  读取文件路径是由当前node命令运行目录的绝对路径拼接上参数路径

  当处于project目录下运行该文件，访问文件路径如下，没有问题
  /Users/yanlong/youzan/personal/node/project/testFile/a.js

  当处于node目录下运行该文件，访问文件路径如下，就出现了文件路径错误的问题
  /Users/yanlong/youzan/personal/node/testFile/a.js

  出现路径拼接错误是因为，我们提供的参数路径是相对路径，相对于当前文件的相对路径
  但是运行时进行路径拼接的时候，拼接的是当前node命令运行目录的绝对路径

  解决方案是直接传入文件的绝对路径，通过__dirname获取到当前文件的绝对路径，
  拼接上基于本文件的相对路径参数，进行路径参数的传递
  `${__dirname}/testFile/a.js`

  新的问题，当以__dirname拼接文件路径时，会出现不能出现./以及../，这样的话，
  就只能根据当前文件路径，访问到下级目录中文件，不能访问上级目录中的文件

  解决问题，使用path模块的join方法进行路径拼接，path.join()

*/

const filePath = '/Users/yanlong/youzan/personal/node/project/testFile/a.js'
const filePath1 = '/Users/yanlong/youzan/personal/node/project/testFile/a.JS'

// basename,根据文件路径获取文件名
let fileBaseName = path.basename(filePath)
console.log(fileBaseName) // >>> a.js

// 获取去除文件后缀的文件名
fileBaseName = path.basename(filePath, '.js')
console.log(fileBaseName) // >>> a

// 后缀区分大小写
fileBaseName = path.basename(filePath, '.JS')
console.log(fileBaseName) // >>> a.js
fileBaseName = path.basename(filePath1, '.js')
console.log(fileBaseName) // >>> a.JS


// extname,根据文件路径获取文件后缀
let fileExtName = path.extname(filePath)
console.log(fileExtName) // >>> .js

// 区分大小写
fileExtName = path.extname(filePath1)
console.log(fileExtName) // >>> .JS
