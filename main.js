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
let allTaken = false

console.log(cells)

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!allTaken){     
      console.log(cell.id)
      console.log(currentTurn)
      switch (currentTurn){
        case 'x': 
          updateCellsIndex(cell.id, 'x')
          checkFull()
          break
        case 'o': 
          updateCellsIndex(cell.id, 'o')
          checkFull()
          break
      }
    } else {
      checkFull()
    }
  })
})

function updateCellsIndex(id, currentPlayer) {
  if (cellsIndex[id] == ""){
    cellsIndex[id] = currentPlayer
    if (currentPlayer == 'x'){
      xCells.push(id)
      if (checkWin()) {
        allTaken = true
        return
      }
      currentTurn = 'o'
    } else {
      oCells.push(id)
      if (checkWin()) {
        allTaken = true
        return
      }
      currentTurn = 'x'
    }
    console.log(cellsIndex)
    console.log(xCells)
    console.log(oCells)
    printCell(id, currentPlayer)
    checkFull()
  } else {
    alert('Cell is already choosed')
    if (currentPlayer == 'x'){
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }
}

function checkWin() {
  for (let i = 0; i < winningSequences.length; i++){
    const sequence = winningSequences[i]
    let xCount = 0
    let oCount = 0
    for (let j = 0; j < sequence.length; j++){
      const cellIndex = sequence[j]
      if (xCells.includes(cellIndex.toString())){
        xCount++
        if (xCount === 3){
          alert("X wins!")
          location.reload()
          return true
        }
      } else if (oCells.includes(cellIndex.toString())){
        oCount++
        if (oCount === 3){
          alert("O wins!")
          location.reload()
          return true
        }
      }
    }
  }
  return false
}

function checkFull() {
  if (!cellsIndex.includes("")) {
    alert("All cells were taken")
    allTaken = true
  }
}

function printCell(cellId, currentPlayer) {
  if (currentPlayer == 'x'){
    document.getElementById(cellId).innerHTML = "<img src='./img/cross.png' style='width: 100%; padding: 20px'>"
  } else if (currentPlayer == 'o'){
    document.getElementById(cellId).innerHTML = "<img src='./img/circle.png' style='width: 100%; padding: 20px'>"
  }
}
