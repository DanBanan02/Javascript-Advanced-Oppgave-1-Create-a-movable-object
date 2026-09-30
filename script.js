
/* Grabs the box element from "Html" */
const box = document.querySelector("#box")

/* starting position of box & box speed. */
let axisY = 0
let axisX = 0
let speed = 12

const keys = {}

let targetX = null
let targetY = null

const boxStart = box.getBoundingClientRect()
const boxStartX = boxStart.left
const boxStartY = boxStart.top
const boxWidth = boxStart.width
const boxHeight = boxStart.height

/* if key is pressed */
document.addEventListener("keydown", (e) => {
    keys[e.key] = true
})

/* if key is released */
document.addEventListener("keyup", (e) => {
    keys[e.key] = false
})

document.addEventListener("click", (e) => {


    targetX = e.clientX - boxStartX - boxWidth / 2
    targetY = e.clientY - boxStartY - boxHeight / 2
})

/* adds keys to move in axis */
function moveBox() {

     /* moves the #box to the up. */
    if (keys["w"]) 
    {
        axisY -= speed

        targetX = null
        targetY = null
    }

     /* moves the #box to the down. */
    if (keys["s"]) 
    {
        axisY += speed

        targetX = null
        targetY = null
    }
     /* moves the #box to the left. */
    if (keys["a"])
    {
        axisX -= speed

        targetX = null
        targetY = null
    }

    /* moves the #box to the right. */
    if (keys["d"])
    {
        axisX += speed

        targetX = null
        targetY = null
    }

    if (targetX !== null && targetY !== null)
    {
        const distanceX = targetX - axisX
        const distanceY = targetY - axisY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if (distance > speed)
        {
            axisX += distanceX / distance * speed
            axisY += distanceY / distance * speed
        }

        else 
        {
            axisX = targetX
            axisY = targetY

            targetX = null
            targetY = null
        }
    }

    const minX = -boxStartX
    const maxX = window.innerWidth - boxStartX - boxWidth
    const minY = -boxStartY
    const maxY = window.innerHeight - boxStartY - boxHeight

    axisX = Math.max(minX, Math.min(axisX, maxX))
    axisY = Math.max(minY, Math.min(axisY, maxY))

    /* makes the box move in pixels */
    box.style.transform = `translate(${axisX}px, ${axisY}px)`

    /* animates the pixles to let box move smoothly */
    requestAnimationFrame(moveBox)
}

moveBox()