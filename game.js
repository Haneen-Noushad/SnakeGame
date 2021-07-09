import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead ,snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'


let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false
let sc = 0
let element = getSnakeHead();



export function updatescore(num)
{
    document.getElementById("score").innerText = Math.floor(num);
    sc=num;
}

function main(currentTime)
{
    if(gameOver)
    {
        if(confirm("YOU LOST, PRESS OK TO RESTART \nSCORE : "+ Math.floor(sc)))
        {
            location.reload()
        }
        return
    }
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secondsSinceLastRender < 1/snake_speed) return
    
    console.log('Render')
    lastRenderTime = currentTime
    
    update()
    draw()

}
window.requestAnimationFrame(main)

function update()
{
    updateSnake()
    updateFood()
    checkDeath()
}
function draw()
{
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkDeath()
{
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}