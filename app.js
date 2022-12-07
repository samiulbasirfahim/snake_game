const can = document.getElementById("canvas")
const ctx2d = can.getContext("2d")

document.onkeydown = function(event) {
    alert(event.keyCode)
    if(event.keyCode === 16) {
        /* shift key press */
    }
    if (event.keyCode === 87 || event.keyCode === 38){
        /* up arrow or w pressed */
    }
}