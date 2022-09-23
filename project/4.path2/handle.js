/*
 * @Author: YanLong
 * @Date: 2022-09-19 20:19:24
 * @LastEditTime: 2022-09-21 11:51:17
 * @LastEditors: YanLong
 * @Description: 
 */
const fs = require('fs');
const path = require('path');

// const regStyle = /<style>[^<\/]*<\/style>/gi;
// const regScript = /<script>[^<\/]*<\/script>/gi;


const regStyle = /<style>[^(<\/style>)]*<\/style>/gi;
const regScript = /<script>[^(<\/a)]*<\/script>/g;

fs.readFile(path.join(__dirname, './test.html'), 'utf8', (err, data) => {

  if (err) return console.log(`failed!${err.message}`);

  console.log(data.toString())
  // 匹配到style标签
  let styleArr=data.match(regStyle)
  console.log(styleArr)

  // 匹配到script标签
  let scriptArr=data.toString().match(regScript)
  console.log(scriptArr)

})