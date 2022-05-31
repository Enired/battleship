const generateBoard = function(){
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const rowStart = 1;
  const rowEnd = 10;
  let board = [];

  for(let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++){
    let row = [];
    for(let columnIndex = 0; columnIndex < columns.length; columnIndex++){
      row.push(`${columns[columnIndex]}${rowIndex}`);
    }
    board.push(row);
  }
  return board;
}

console.log(generateBoard());