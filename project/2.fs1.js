/*
 * @Author: YanLong
 * @Date: 2022-09-08 15:42:46
 * @LastEditTime: 2022-09-15 20:56:26
 * @LastEditors: YanLong
 * @Description: 
 */
const fs = require('fs')

// 读取文件内容
fs.readFile('./testFile/a.js', 'utf-8', (err, data) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log('content:' + data)

})

// 写入文件内容
fs.writeFile("./testFile/a.js", '987654321', (err) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log('success')

})

// 写入文件内容，当没有找到要写入文件时，会创建文件，然后写入
fs.writeFile("./testFile/b.js", '123456789', (err) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log('success')

})

// demo,复制一个文件
fs.readFile('./testFile/a.js',(err,data)=>{

  if (err) return console.log(`failed!${err.message}`);

  fs.writeFile("./testFile/a.copy.js", data, (err) => {

    if (err) return console.log(`failed!${err.message}`);
  
    console.log('success')
  
  })
  
})


// 相关任务同步异步分析