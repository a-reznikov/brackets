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

    for (let brackets = 0; brackets < bracketsArray.length;) {
      //console.log('bracketsArray on enter', bracketsArray);
      brackets += 1;
      //console.log('brackets number', brackets);
      if (bracketsArray[brackets] === ')' || bracketsArray[brackets] === ']'|| bracketsArray[brackets] === '}'|| bracketsArray[brackets] === '|') {
        bracketDelete (bracketsArray[brackets]);
        brackets = 0;
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
      if (sliceArray.indexOf(oposition, -(sliceArray.length - 1)) !== -1) {
        //console.log('delete slice', bracketsArray.splice(sliceArray.indexOf(oposition, -(sliceArray.length - 1)), (bracketsArray.indexOf(bracket) + 1)));
        bracketsArray.splice(sliceArray.indexOf(oposition, -(sliceArray.length - 1)), (bracketsArray.indexOf(bracket) + 1));
      } else {
        noDouble += bracket;
        //console.log('Dont find oposition for, delete', bracket);
        bracketsArray.splice(bracketsArray.indexOf(bracket), 1);
      }
    }
    // console.log(noDouble);
    console.log('bracketsArray on exit', bracketsArray);
    compare.push(noDouble);
  }
  console.log('compare', compare);
  // compare[0] == compare[1] ? console.log(true) : console.log(false);
  return compare[0] == compare[1] ? true : false;
}