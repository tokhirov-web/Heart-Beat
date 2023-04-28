// const btn = document.querySelector("button")
const firstHeart = document.querySelector(".first")
const secondHeart = document.querySelector(".second")
const thirdHeart = document.querySelector(".third")




const button = document.querySelector('button')
let audio = document.querySelector('audio')
let isPlaying = false

button.onclick = () => {
    if (isPlaying) {
        isPlaying = false
        audio.pause()
    } else {
        isPlaying = true
        audio.play()
        setTimeout(() => {
            firstHeart.classList.add("animationOne")
        }, 200);
    
        setTimeout(() => {
            secondHeart.classList.add("animationTwo")
        }, 800);
    
        setTimeout(() => {
            thirdHeart.classList.add("animationThree")
        }, 1400);
    }
}