import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from './grid.js'
import {updatescore} from './game.js'
 
let food = getRandomFoodPosition()
const expansion_rate = 1

var count=0

export function update()
{
   if(onSnake(food))
   {
       expandSnake(expansion_rate)
       food = getRandomFoodPosition()  
       count++
       
   }
   updatescore(count)  
}

export function draw(gameBoard)
{
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition()
{
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition))
    {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}