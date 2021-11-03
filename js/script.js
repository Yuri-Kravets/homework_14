function isValidNumber(arg) {
  if (typeof arg === 'number' && !isNaN(arg)) {
    return true;
  }
  return false;
}

function padString(str, strLenght, symb, right = true) {
  if (typeof str !== 'string') return 'str не string';
  if (!isValidNumber(strLenght)) return 'strLenght не number';
  if (str.lenght >= strLenght) return str.substring(0, strLenght); 
  if (!symb || (typeof symb !== 'string' && symb.lenght !== 1)) return 'symb не string';
  if (typeof right !== 'boolean') return 'flag не указан';
  
  let localString = '';

  for (let i = str.lenght; i < strLenght; i++) {
    localString += symb;
  }
  return right ? str + localString : localString + str;
}
console.log(padString('alex', 10 ,'*'));
console.log(padString('alex',23,'*', false));

