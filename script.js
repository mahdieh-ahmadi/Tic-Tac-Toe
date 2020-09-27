const statusDisplay = document.querySelector('.game--status');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let i = false


let currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {
  if(i){
    return
  }

  
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
  console.log(gameState[0] !== ''&& gameState[1] !== ''  &&  gameState[7] !== '' && gameState[8] !== '')
  if(gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' &&  gameState[6] !== '' &&  gameState[7] !== ''&& gameState[8] !== ''){
    console.log('draw')
    currentPlayerTurn = () =>  'ended in a draw';
    statusDisplay.innerHTML = 'ended in a draw';
  }

//1
if(gameState[0]!==''){
  if(gameState[6]!==''){
    if(gameState[0]===gameState[3]){
      if(gameState[3]===gameState[6]){
        console.log('game over')
        statusDisplay.innerHTML = `player ${currentPlayer} has won`;
        i=true
      }
    }
  }
}
//2
if(gameState[1]!==''){
  if(gameState[7]!==''){
if(gameState[1]===gameState[4]){
  if(gameState[4]===gameState[7]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//3
if(gameState[2]!==''){
  if(gameState[8]!==''){
if(gameState[2]===gameState[5]){
  if(gameState[5]===gameState[8]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//4
if(gameState[0]!==''){
  if(gameState[2]!==''){
if(gameState[0]===gameState[1]){
  if(gameState[1]===gameState[2]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//5
if(gameState[3]!==''){
  if(gameState[5]!==''){
if(gameState[3]===gameState[4]){
  if(gameState[4]===gameState[5]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//6
if(gameState[6]!==''){
  if(gameState[8]!==''){
if(gameState[6]===gameState[7]){
  if(gameState[7]===gameState[8]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//7
if(gameState[0]!==''){
  if(gameState[8]!==''){
if(gameState[0]===gameState[4]){
  if(gameState[4]===gameState[8]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}
//8
if(gameState[2]!==''){
  if(gameState[6]!==''){
if(gameState[2]===gameState[4]){
  if(gameState[4]===gameState[6]){
    console.log('game over')
    statusDisplay.innerHTML = `player ${currentPlayer} has won`;
     i=true
  }
}}}

}
//finish

function handlePlayerChange() {
  if(i){
    return
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );

  if (gameState[clickedCellIndex] !== '') {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handlePlayerChange();
}

function handleRestartGame() {
  currentPlayer = 'X';
  i = false
  currentPlayerTurn = () => `It's ${currentPlayer}'s turn`
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
}

document
  .querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener('click', handleCellClick));
document
  .querySelector('.game--restart')
  .addEventListener('click', handleRestartGame);
