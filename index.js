function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
    for(var i = fromN; i <= toN; i++) {
      result += i;
    }
  return result;
  // accumulator to count ++
}

module.exports = sum;
