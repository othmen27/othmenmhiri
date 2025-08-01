'use strict';
const sh = require('shelljs');
const upath = require('upath');

const distPath = upath.resolve(__dirname, '../dist');
const docsPath = upath.resolve(__dirname, '../docs');

console.log('### INFO: Cleaning docs folder');
sh.rm('-rf', docsPath);
sh.mkdir('-p', docsPath);

console.log('### INFO: Copying files from dist to docs');
sh.cp('-R', distPath + '/.', docsPath);

console.log('### INFO: Deployment to docs folder completed.');
