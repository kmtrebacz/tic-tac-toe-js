const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const cells = document.querySelectorAll('.square')
const cellsIndex = ["", "", "", "", "", "", "", "", ""]
const winningSequences = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const xCells = []
const oCells = []
let currentTurn = 'x'

console.log(cells)

cells.forEach(cell => {
     cell.addEventListener('click', () => {
          console.log(cell.id)
          console.log(currentTurn)
          switch (currentTurn){
            case 'x': 
              updateCellsIndex(cell.id, 'x')
              break
            case 'o': 
              updateCellsIndex(cell.id, 'o')
              break
          }
     })
})

function updateCellsIndex(id, currentPlayer) {
  if (cellsIndex[id] == ""){
    cellsIndex[id] = currentPlayer
    if (currentPlayer == 'x'){
      xCells.push(id)
      currentTurn = 'o'
    } else {
      oCells.push(id)
      currentTurn = 'x'
    }
    console.log(cellsIndex)
    console.log(xCells)
    console.log(oCells)
    printCell(id, currentPlayer)
  } else {
    alert('Cell is already choosed')
  }
}

function printCell(cellId, currentPlayer) {
  if (currentPlayer == 'x'){
    document.getElementById(cellId).innerHTML = "<img src='./img/cross.png' style='width: 100%; padding: 20px'>"
  } else if (currentPlayer == 'o'){
    document.getElementById(cellId).innerHTML = "<img src='./img/circle.png' style='width: 100%; padding: 20px'>"
  }
}
