import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead ,snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false

function main(currentTime)
{
    if(gameOver)
    {
        if(confirm('YOU LOST, PRESS OK TO RESTART'))
        {
            window.location = '/'
        }
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