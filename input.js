let InputDirection = { x:0 , y:0 }
let lastInputDirection = { x:0 , y:0 }

window.addEventListener('keydown',e => {
    switch(e.key)
    {
        case 'ArrowDown' : 
           if(lastInputDirection.y !== 0) break
           InputDirection = { x:0, y:1}
           break        
        case 'ArrowUp' : 
           if(lastInputDirection.y !== 0) break
           InputDirection = { x:0, y:-1}
           break
        case 'ArrowRight' : 
           if(lastInputDirection.x !== 0) break
           InputDirection = { x:1, y:0}
           break
        case 'ArrowLeft' : 
           if(lastInputDirection.x !== 0) break
           InputDirection = { x:-1, y:0}
           break
    } 
})

export function getInputDirction(){
    lastInputDirection = InputDirection
    return InputDirection
}