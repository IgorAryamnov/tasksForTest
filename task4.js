function showMultiplicationTable(number) {
  let firstRow = [""];
  let result = [];

  for (let i = 1; i <= number; i++) {
    firstRow.push(i);
  }
  result.push(firstRow);

  for (let rowIndex = 1; rowIndex <= number; rowIndex++) {
    let row = [rowIndex];

    for (let columnIndex = 1; columnIndex <= number; columnIndex++) {
      let current = rowIndex * columnIndex;
      row.push(current);
    }

    result.push(row);
  }

  for (let columnIndex = 0; columnIndex < firstRow.length; columnIndex++) {
    let maxLength = result[result.length - 1][columnIndex].toString().length;

    for (let rowIndex = 0; rowIndex < result.length; rowIndex++) {
      let current = result[rowIndex][columnIndex].toString();
      result[rowIndex][columnIndex] =
        " ".repeat(maxLength - current.length) + current;
    }
  }

  for (let row = 0; row < result.length; row++) {
    console.log(result[row].join(" "));
  }
}
