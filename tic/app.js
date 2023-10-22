const gameB = document.querySelector('#gameboard');
const inforEl = document.querySelector('#info');

const startCells =[
    '','','','','','','','','',
];

// let go = "circle";
// inforEl.textContent = "Circle goes first";

 function createBoard(){
    startCells.forEach((_cell, index)=>{
    const cellElement = document.createElement('div')
      cellElement.classList.add('square')
       cellElement.id = index;
       cellElement.addEventListener('click', addGo)
      gameB.append(cellElement)
    })
 }
 createBoard();    

   function addGo(e){
   const goDisplay = document.createElement('div');
   goDisplay.classList.add('cross')
     e.target.append(goDisplay)

   
   }