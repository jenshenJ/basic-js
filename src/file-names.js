const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  res = [];
  source = [];
  names.forEach(a => source.push(a));
  for(let i = names.length - 1; i >= 0; i--){
    let count = 0;
    for(j = 0; j < i; j++){
      if(source[i] == source[j]){
          count++;
      }
      
    }
    names[i] = names[i] + (count ? '(' + count + ')' : '');
    source[i] = names[i];
  }

  for(let i = names.length - 1; i >= 0; i--){
    let count = 0;
    for(j = 0; j < i; j++){
      if(source[i] == source[j]){
          count++;
      }
      
    }
    names[i] = names[i] + (count ? '(' + count + ')' : '');
    source[i] = names[i];
  }
  return names;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
module.exports = {
  renameFiles
};
