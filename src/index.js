module.exports = function check(str, bracketsConfig) {
  let arrayFromString = str.split('');
  let arrayFromConfig = [];
  for (arr in bracketsConfig) {
    bracketsConfig[arr].forEach((item) => {
      arrayFromConfig.push(item);
    });
  }
  // console.log(arrayFromString);
  // console.log(arrayFromConfig);
  let compare = [];
  packagine(arrayFromString);
  packagine(arrayFromConfig);

  function packagine (bracketsArray) {
    let noDouble = '';

    for (let brackets = -1; brackets < bracketsArray.length;) {
      brackets += 1;
      if (bracketsArray[brackets] === ')' || bracketsArray[brackets] === ']'|| bracketsArray[brackets] === '}'|| bracketsArray[brackets] === '|') {
        // console.log('Find brackets', bracketsArray[brackets], "its number = ", brackets);
        bracketDelete (bracketsArray[brackets]);
        brackets = -1;
      }
    }
    function  bracketDelete (bracket) {
      let oposition = '';
      if (bracket === ')') {
        oposition = '(';
      } else if (bracket === ']') {
        oposition = '[';
      } else if (bracket === '}') {
        oposition = '{';
      } else if (bracket === '|') {
        oposition = '|';
      }
      let sliceArray = bracketsArray.slice(0, bracketsArray.indexOf(bracket));
      // console.log(bracketsArray);
      // console.log(sliceArray, 'length = ', sliceArray.length);
      if (sliceArray.indexOf(oposition, -(sliceArray.length - 1)) !== -1) {
        // bracketsArray.splice(bracketsArray.indexOf(bracket), 1);
        bracketsArray.splice(sliceArray.indexOf(oposition, -(sliceArray.length - 1)), (bracketsArray.indexOf(bracket) + 1));
        // console.log('Deleted numbers', bracket, 'and', oposition, 'After deleted', bracketsArray);
      } else {
        noDouble += bracket;
        bracketsArray.splice(bracketsArray.indexOf(bracket), 1);
      }
    }
    // console.log(noDouble);
    // console.log(bracketsArray);
    compare.push(noDouble);
  }
  // console.log(compare);
  // compare[0] == compare[1] ? console.log(true) : console.log(false);
  return compare[0] == compare[1] ? true : false;
}