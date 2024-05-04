function countingComputers(number) {
  const plural = "компьютеров";
  const single = "компьютер";
  const several = "компьютера";

  let decimalRemainder = number % 100;
  let lastDigit = number % 10;

  if (decimalRemainder >= 10 && decimalRemainder <= 15) {
    return `${number} ${plural}`;
  }

  if (lastDigit === 0) {
    return `${number} ${plural}`;
  }
  if (lastDigit >= 5) {
    return `${number} ${plural}`;
  }
  if (lastDigit === 1) {
    return `${number} ${single}`;
  }

  return `${number} ${several}`;
}
