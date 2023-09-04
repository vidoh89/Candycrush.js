document.addEventListener("DOMContentLoaded",() =>{
    const grid = document.querySelector('.grid');
    const width = 8;
    const squares = [];

    //Create array to hold colors for obj on grid
    const candyColors =[
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ];

    //Create board
    function createBoard(){
    for(let i =0; i<width*width; i++){
        const square = document.createElement('div');
        square.setAttribute('draggable',true);//Makes squares draggable
        square.setAttribute('id',i);
        let randomColor = Math.floor(Math.random() * candyColors.length);
        square.style.backgroundColor = candyColors[randomColor];//attatch colors to squares.
        grid.appendChild(square);
        squares.push(square);
    }
   }

   createBoard();
   //Drag candies settings
squares.forEach(square => square.addEventListener('dragstart',dragStart));
squares.forEach(square => square.addEventListener('dragend',dragEnd));
squares.forEach(square => square.addEventListener('dragover',dragOver));
squares.forEach(square => square.addEventListener('dragenter',dragEnter));
squares.forEach(square => square.addEventListener('dragleave',dragLeave));
squares.forEach(square => square.addEventListener('dragdrop',dragDrop));
function dragStart(){
    console.log(this.id,'dragStart');
}
function dragOver(){
    console.log(this.id,'dragover');
}
function dragEnter(){
    console.log(this.id,'dragenter');
}
function dragLeave(){
    console.log(this.id,'dragleave');
}
function dragDrop(){
    console.log(this.id,'dragdrop');
}
function dragEnd(){
    console.log(this.id,'dragend');
}
});
