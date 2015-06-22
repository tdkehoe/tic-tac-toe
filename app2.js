var row1x = 0,
row2x = 0,
row3x = 0,
columnAx = 0,
columnBx = 0,
columnCx = 0,
diagonal1x = 0,
diagonal2x = 0,

row1o = 0,
row2o = 0,
row3o = 0,
columnAo = 0,
columnBo = 0,
columnCo = 0,
diagonal1o = 0,
diagonal2o = 0,

counter = 0;

var playerX = function () {
  if (row1x === 3) {alert("X wins!"); }
  if (row2x === 3) {alert("X wins!"); }
  if (row3x === 3) {alert("X wins!"); }

  if (columnAx === 3) {alert("X wins!"); }
  if (columnBx === 3) {alert("X wins!"); }
  if (columnCx === 3) {alert("X wins!"); }

  if (diagonal1x === 3) {alert("X wins!"); }
  if (diagonal2x === 3) {alert("X wins!"); }
  if (counter === 9) {alert("Cat's game."); }
};

var playerO = function () {
  if (row1o === 3) {alert("O wins!"); }
  if (row2o === 3) {alert("O wins!"); }
  if (row3o === 3) {alert("O wins!"); }

  if (columnAo === 3) {alert("O wins!"); }
  if (columnBo === 3) {alert("O wins!"); }
  if (columnCo === 3) {alert("O wins!"); }

  if (diagonal1o === 3) {alert("O wins!"); }
  if (diagonal2o === 3) {alert("O wins!"); }
  if (counter === 9) {alert("Cat's game."); }
};

// Square 1A
document.getElementById("sq1a").addEventListener('click', function () {
  if (counter % 2 === 0 && sq1a.innerHTML === '') { // if counter is even
    sq1a.innerHTML = 'x';
    row1x++;
    columnAx++;
    diagonal1x++;
    counter++;
    playerX();
  } else if (sq1a.innerHTML === '') { // if counter is odd
    sq1a.innerHTML = 'o';
    row1o++;
    columnAo++;
    diagonal1o++;
    counter++;
    playerO();
  }
});

document.getElementById("sq1b").addEventListener('click', function () {
  if (counter % 2 === 0 && sq1b.innerHTML === '') { // if counter is even
    sq1b.innerHTML = 'x';
    row1x++;
    columnBx++;
    counter++;
    playerX();
  } else if (sq1b.innerHTML === '') { // if counter is odd
    sq1b.innerHTML = 'o';
    row1o++;
    columnBo++;
    counter++;
    playerO();
  }
});

document.getElementById("sq1c").addEventListener('click', function () {
  if (counter % 2 === 0 && sq1c.innerHTML === '') { // if counter is even
    sq1c.innerHTML = 'x';
    row1x++;
    columnCx++;
    diagonal2x++;
    counter++;
    playerX();
  } else if (sq1c.innerHTML === '') { // if counter is odd
    sq1c.innerHTML = 'o';
    row1o++;
    columnCo++;
    diagonal2o++;
    counter++;
    playerO();
  }
});

document.getElementById("sq2a").addEventListener('click', function () {
  if (counter % 2 === 0 && sq2a.innerHTML === '') { // if counter is even
    sq2a.innerHTML = 'x';
    row2x++;
    columnAx++;
    counter++;
    playerX();
  } else if (sq2a.innerHTML === '') { // if counter is odd
    sq2a.innerHTML = 'o';
    row2o++;
    columnAo++;
    counter++;
    playerO();
  }
});

document.getElementById("sq2b").addEventListener('click', function () {
  if (counter % 2 === 0 && sq2b.innerHTML === '') { // if counter is even
    sq2b.innerHTML = 'x';
    row2x++;
    columnBx++;
    diagonal1x++;
    diagonal2x++;
    counter++;
    playerX();
  } else if (sq2b.innerHTML === '') { // if counter is odd
    sq2b.innerHTML = 'o';
    row2o++;
    columnBo++;
    diagonal1o++;
    diagonal2o++;
    counter++;
    playerO();
  }
});

document.getElementById("sq2c").addEventListener('click', function () {
  if (counter % 2 === 0 && sq2c.innerHTML === '') { // if counter is even
    sq2c.innerHTML = 'x';
    row2x++;
    columnCx++;
    counter++;
    playerX();
  } else if (sq2c.innerHTML === '') { // if counter is odd
    sq2c.innerHTML = 'o';
    row2o++;
    columnCo++;
    counter++;
    playerO();
  }
});

document.getElementById("sq3a").addEventListener('click', function () {
  if (counter % 2 === 0 && sq3a.innerHTML === '') { // if counter is even
    sq3a.innerHTML = 'x';
    row3x++;
    columnAx++;
    diagonal2x++;
    counter++;
    playerX();
  } else if (sq3a.innerHTML === '') { // if counter is odd
    sq3a.innerHTML = 'o';
    row3o++;
    columnAo++;
    diagonal2o++;
    counter++;
    playerO();
  }
});

document.getElementById("sq3b").addEventListener('click', function () {
  if (counter % 2 === 0 && sq3b.innerHTML === '') { // if counter is even
    sq3b.innerHTML = 'x';
    row3x++;
    columnBx++;
    counter++;
    playerX();
  } else if (sq3b.innerHTML === '') { // if counter is odd
    sq3b.innerHTML = 'o';
    row3o++;
    columnBo++;
    counter++;
    playerO();
  }
});

document.getElementById("sq3c").addEventListener('click', function () {
  if (counter % 2 === 0 && sq3c.innerHTML === '') { // if counter is even
    sq3c.innerHTML = 'x';
    row3x++;
    columnCx++;
    diagonal1x++;
    counter++;
    playerX();

  } else if (sq3c.innerHTML === '') { // if counter is odd
    sq3c.innerHTML = 'o';
    row3o++;
    columnCo++;
    diagonal1o++;
    counter++;
    playerO();
  }
});
