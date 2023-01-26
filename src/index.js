module.exports = function check(str, bracketsConfig) {
  let arrayFromString = str.split('');
  let arrayFromConfig = [];
  for (arr in bracketsConfig) {
    bracketsConfig[arr].forEach((item) => {
      arrayFromConfig.push(item);
    });
  }
  let compare = [];
  packagine(arrayFromString);
  packagine(arrayFromConfig);

  function packagine (bracketsArray) {
    let noDouble = '';
    let bracketNumber = 0;
    let count = 0;
    let count7 = 0;
    let count8 = 0;
    for (let brackets = 0; brackets < bracketsArray.length - 1;) {
      brackets ++;
      //console.log('_____________________________________');
      //console.log('bracketsArray in Enter', bracketsArray);
      //console.log('number', brackets);
      if (bracketsArray[brackets] === ')' || bracketsArray[brackets] === ']'|| bracketsArray[brackets] === '}'|| bracketsArray[brackets] === '2'|| bracketsArray[brackets] === '4'|| bracketsArray[brackets] === '6') {
        //console.log('brackets',bracketsArray[brackets], 'find on number', brackets);
        bracketNumber = brackets;
        bracketDelete (bracketsArray[brackets]);
        brackets = 0;
        count = 0;
      } else if (brackets === bracketsArray.length - 1) {
        //console.log(brackets, '===' , bracketsArray.length - 1);
        bracketNumber = brackets;
        bracketDelete (bracketsArray[brackets]);
        brackets = 0;
        count = 0;
      } else if (bracketsArray[brackets] === '|') {
        //console.log('First brackets', bracketsArray[brackets], 'find', brackets);
        count++;
        //console.log(count);
          if (count === 2) {
            //console.log('Second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count = 0;
          } else if (bracketsArray[0] === '|' && bracketsArray[1] === '|') {
            //console.log('Towords first and second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count = 0;
          }
      } else if (bracketsArray[brackets] === '7') {
        //console.log('First brackets', bracketsArray[brackets], 'find', brackets);
        count7++;
        //console.log(count);
          if (count7 === 2) {
            //console.log('Second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count7 = 0;
          } else if (bracketsArray[0] === '7' && bracketsArray[1] === '7') {
            //console.log('Towords first and second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count7 = 0;
          }
      } else if (bracketsArray[brackets] === '8') {
        //console.log('First brackets', bracketsArray[brackets], 'find', brackets);
        count8++;
        //console.log(count);
          if (count8 === 2) {
            //console.log('Second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count8 = 0;
          } else if (bracketsArray[0] === '8' && bracketsArray[1] === '8') {
            //console.log('Towords first and second brackets', bracketsArray[brackets], 'find', brackets);
            bracketNumber = brackets;
            bracketDelete (bracketsArray[brackets]);
            brackets = 0;
            count8 = 0;
          }
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
      } else if (bracket === '2') {
        oposition = '1';
      } else if (bracket === '4') {
        oposition = '3';
      } else if (bracket === '6') {
        oposition = '5';
      } else if (bracket === '7') {
        oposition = '7';
      } else if (bracket === '8') {
        oposition = '8';
      } 
      let sliceArray = bracketsArray.slice(0, bracketNumber + 1);
      let endSlice = bracketNumber;
      //console.log('sliceArray', sliceArray);
      if (sliceArray.length === 2) {
        if (sliceArray[0] === oposition) {
          bracketsArray.splice(0, 2);
          //console.log("Length 2: after bracketsArray", bracketsArray);
        } else {
          //console.log("noDouble, delete One ", bracketsArray[endSlice]);
          noDouble += bracketsArray[endSlice];
          bracketsArray.splice(endSlice, 1);
        }
      } else {
        if (sliceArray.indexOf(oposition !== -1)) {
          for (let i = sliceArray.length - 2; i >= 0;) {
            if (sliceArray[i] === oposition) {
              bracketsArray.splice(i, sliceArray.length - i);
              //console.log("after bracketsArray", bracketsArray);
              break;
            }
            i--;
          }
        } else {
          //console.log("noDouble, delete One ", bracketsArray[endSlice]);
          noDouble += bracketsArray[endSlice];
          bracketsArray.splice(endSlice, 1);
        }
      } 
    }
    let residueBracketsArray = bracketsArray.join('');
    if (bracketsArray.length > 0) {
      residueBracketsArray += noDouble;
    }
    //console.log('noDouble', noDouble);
    compare.push(residueBracketsArray);
    console.log('compare', compare);
  }
  return compare[0] == compare[1] ? true : false;
}
