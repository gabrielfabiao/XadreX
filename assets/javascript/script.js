let inputs = document.querySelector('.input_values')
let createChessBtn = document.querySelector('#show_input')

function createChess(n) {
    let size = Number(document.querySelector('#input_size').value)
    let counterForRows = 1
    let xadrez = document.querySelector('.xadrez')
    xadrez.innerHTML = ""

    xadrez.style = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`
    inputs.style.display = 'none'

    while(counterForRows <= size) {
        createColumns(counterForRows, size, xadrez)
        counterForRows++
    }
}

function createColumns(counterForRows, size, xadrez) {
    let counterForColumns = 1

    while(counterForColumns <= size) {
        let blackGridItem = document.createElement('div')
        let whiteGridItem = document.createElement('div')
        blackGridItem.classList.add("black")
        whiteGridItem.classList.add("white")
       
        if(counterForRows % 2 !== 0){
            if(counterForColumns % 2 !== 0){
                xadrez.appendChild(blackGridItem)
            } else {
                xadrez.appendChild(whiteGridItem)
            }
        } else {
            if(counterForColumns % 2 !== 0){
                xadrez.appendChild(whiteGridItem)
            } else {
                xadrez.appendChild(blackGridItem)
            }
        }
        counterForColumns++

        let currentIndex = 0
        const colors = ["#320115", "#A30544", "#7797E9", "#CCB7C6", "#54D99B"];
        blackGridItem.onmouseover = function() {
            currentIndex = (currentIndex + 1) % colors.length;
            blackGridItem.style.background = colors[currentIndex]
            };

        whiteGridItem.onmouseover = function() {
            currentIndex = (currentIndex + 1) % colors.length;
            whiteGridItem.style.background = colors[currentIndex];
            };
        }
}

createChessBtn.addEventListener('click', showBox)
document.addEventListener('keydown', function(e) {
    if(e.code === "Enter") {
        console.log(e.target)
        createChess()
    }
})


function showBox() {
    inputs.style.display = inputs.style.display == 'none' ? 'flex' : 'none'
}

