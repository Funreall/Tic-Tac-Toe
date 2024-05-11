const squares = document.querySelectorAll('.square')
const resetBtn = document.querySelector('.reset-btn')
const showBtn = document.querySelector('.show-btn')

let symbol = 'o';
let resultArray = new Array(9);

showBtn.addEventListener('click', ()=>{
  resultArray.fill(null, 0, 9)
  console.log(resultArray)
})


squares.forEach((square, index) => {
  square.addEventListener('click', changeSymbol)
  
})

resetBtn.addEventListener('click', resetGame)




function changeSymbol(e) {
  if (symbol.toLowerCase() == 'x') {
    symbol = 'o'
    console.log('oldu')
  } else  {
    symbol = 'x'
    console.log('olmadı')
  }
  e.currentTarget.innerHTML = symbol
}

function resetGame() {
  squares.forEach(square => {
    square.innerHTML = ''
  })
  symbol = 'o'
}