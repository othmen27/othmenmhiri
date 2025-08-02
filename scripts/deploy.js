'use strict';
const sh = require('shelljs');
const upath = require('upath');

const distPath = upath.resolve(__dirname, '../dist');
const docsPath = upath.resolve(__dirname, '../docs');

sh.rm('-rf', docsPath);
sh.mkdir('-p', docsPath);

sh.cp('-R', upath.join(distPath, '*'), docsPath);

