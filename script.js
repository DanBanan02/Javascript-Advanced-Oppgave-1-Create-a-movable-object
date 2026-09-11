
/* Grabs the box element from "Html" */
const box = document.querySelector("#box")

/* starting position of box & box speed. */
let axisY = 0
let axisX = 0
let speed = 6

const keys = {}

/* if key is pressed */
document.addEventListener("keydown", (e) => {
    keys[e.key] = true
})

/* if key is released */
document.addEventListener("keyup", (e) => {
    keys[e.key] = false
})

/* adds keys to move in axis */
function moveBox() {

     /* moves the #box to the up. */
    if (keys["w"]) {
        axisY -= speed
    }

     /* moves the #box to the down. */
    if (keys["s"]) {
        axisY += speed
    }

     /* moves the #box to the left. */
    if (keys["a"]) {
        axisX -= speed
    }

    /* moves the #box to the right. */
    if (keys["d"]) {
        axisX += speed
    }

    /* makes the box move in pixels */
    box.style.transform = `translate(${axisX}px, ${axisY}px)`

    /* animates the pixles to let box move smoothly */
    requestAnimationFrame(moveBox)
}

moveBox()