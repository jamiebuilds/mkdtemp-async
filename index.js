// @flow
const promisify = require('typeable-promisify');
const {mkdtemp} = require('graceful-fs');

let mkdtempAsync = (filePath /* : string */) /*: Promise<string> */ => {
  return promisify(cb => mkdtemp(filePath, cb));
};

module.exports = mkdtempAsync;
