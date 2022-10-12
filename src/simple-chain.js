const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(arguments.length = 0) value = ' ';
    else { value = ' '.concat(value, ' ')}
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || !((position - 1) in this.chain)){ this.chain = []; throw new Error("You can\'t remove incorrect link!");}
    this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    
    let result = '';
    for(let i = 0; i < this.chain.length; i++){
      result += '(' + this.chain[i] + ')';
      if(i != this.chain.length - 1) result += '~~';
    }
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
