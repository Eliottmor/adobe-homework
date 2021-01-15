module.exports = convertToRoman = (number) => {
    let romanDict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let romanNumber = '';
    
      for (let romanValue of Object.keys(romanDict)) {
        let numOfOccurrences = Math.floor(number / romanDict[romanValue]);
        number -= numOfOccurrences * romanDict[romanValue];
        romanNumber += romanValue.repeat(numOfOccurrences);
      }
        
      return romanNumber;
}
