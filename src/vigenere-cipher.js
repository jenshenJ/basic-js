const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(is_direct) {
    this.is_direct = true;
    if (arguments.length) this.is_direct = is_direct;
    console.log(this.is_direct);
  }


  encrypt(str, key) {
    if(arguments.length < 2 || typeof(arguments[0]) !== 'string' || typeof(arguments[1]) !== 'string') throw Error('Incorrect arguments!');
    str = str.toUpperCase();

    let res = "";
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= "A".charCodeAt(0) && str.charCodeAt(i) <= "Z".charCodeAt(0)) {

        res += String.fromCharCode(65 + (key.charCodeAt(j % key.length) - 65 + str.charCodeAt(i) - 65) % 26);
        j++;
      }
      else res += str[i];
    }
    if (this.is_direct === false) {
      res = res.split('').reverse().join('');
    }
    return res;
  }


  decrypt(str, key) {
    if(arguments.length < 2 || typeof(arguments[0]) !== 'string' || typeof(arguments[1]) !== 'string') throw Error('Incorrect arguments!');
    str = str.toUpperCase();

    let res = "";
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= "A".charCodeAt(0) && str.charCodeAt(i) <= "Z".charCodeAt(0)) {
        let dif = key.charCodeAt(j % key.length) - 65;
        let new_val = str.charCodeAt(i) - dif;
        if(new_val < 65){
          new_val = "Z".charCodeAt(0) - (64 - new_val);
        }
        res += String.fromCharCode(new_val);
        j++;
      }
      else res += str[i];
    }
    if (this.is_direct === false) {
      res = res.split('').reverse().join('');
    }
    return res;
  }
}




module.exports = {
  VigenereCipheringMachine
};
