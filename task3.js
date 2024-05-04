function getPrimeNumbers(min, max) {
  let result = [];

  for (let number = min; number <= max; number++) {
    let check = true;
    for (let divisor = 2; divisor <= Math.floor(number ** 0.5); divisor++) {
      if (number % divisor === 0) {
        check = false;
        break;
      }
    }
    if (check === true) {
      result.push(number);
    }
  }
  return result;
}
