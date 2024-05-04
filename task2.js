function findDivisors(array) {
  let result = [];
  let minNumber = Infinity;

  for (let index = 0; index < array.length; index++) {
    minNumber = Math.min(minNumber, array[index]);
  }

  for (let divisor = 2; divisor <= minNumber; divisor++) {
    let check = true;

    for (let index = 0; index < array.length; index++) {
      if (array[index] % divisor !== 0) {
        check = false;
        break;
      }
    }

    if (check === true) {
      result.push(divisor);
    }
  }
  return result;
}
