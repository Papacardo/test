const fs = require('node:fs');
const {extractStyle} = require('@ant-design/static-style-extract');

fs.writeFileSync('./public/antd.min.css', extractStyle());

console.log(`Antd CSS generated`);
