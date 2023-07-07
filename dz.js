

for (let line = '*'; line.length <= 7; line += '*') {
    console.log(line);
  }
  
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }  



  function Chessboard(size) {
    let chessboard = '';
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      }
      chessboard += '\n';
    }
  
    return chessboard;
  }
  
  const boardSize = 8;
  const chessboard = Chessboard(boardSize);
  console.log(chessboard);

  
  const subscription = 'vip';
  const subscription1 = 'pro'
  const subscription2 = 'free'

if (subscription1 == 'pro' ||  subscription == 'vip') {
  console.log('Имеет доступ к контенту');
} else {
  console.log('Не имеет доступа к контенту');
}

const friend = true;
const online = true;
const busy = false;


if (friend && online && !busy) {
  console.log('Чат открыт');
} else {
  console.log('Чат закрыт');
}