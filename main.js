const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = ["", "", "", "", "", "", "", "", ""]

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement= document.createElement('div')
    cellElement.classList.add('square')
    cellElement.classList.add('col-4')
    cellElement.id = index
    gameBoard.append(cellElement)
  })
}

createBoard()
