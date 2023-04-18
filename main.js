const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const cells = document.querySelectorAll('.square')
const xCells = ["", "", "", "", "", "", "", "", ""]
const oCells = ["", "", "", "", "", "", "", "", ""]
let currentTurn = 'x'

console.log(cells)

cells.forEach(cell => {
     cell.addEventListener('click', () => {
          console.log(cell.id)
          console.log(currentTurn)
          switch (currentTurn){
               case 'x': currentTurn = 'o' 
                    break
               case 'o': currentTurn = 'x'
                    break
          }
     })
})