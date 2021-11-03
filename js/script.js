function isValidNumber(arg) {
  if (typeof arg === 'number' && !isNaN(arg)) {
    return true;
  }
  return false;
}

function padString(str, strLenght, symb, right = true) {
  if (typeof str !== 'string') return 'string не string';
  if (!isValidNumber(strLenght)) return 'strLenght не number';
  if (typeof symb !== 'string' && symb.lenght !== 1) return 'symb не string';
  if (typeof right !== 'boolean') return 'flag не указан';

  let localString = '';

  for (let i = str.lenght; i < strLenght; i++) {
    localString += symb;
  }
  return right ? str + localString : localString + str;
}
console.log(padString('lexaim',10,'*'));
console.log(padString('lexaim',23,'*', false));

