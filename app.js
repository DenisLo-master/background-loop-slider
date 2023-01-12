const sidebar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")

const sidebarElements = sidebar.querySelectorAll("div")
const lastSidebarElement = sidebarElements[sidebarElements.length - 1].cloneNode(true)

const mainSlideElements = mainSlide.querySelectorAll("div")
const firstMainSlideElement = mainSlideElements[0].cloneNode(true)

sidebar.prepend(lastSidebarElement)
mainSlide.append(firstMainSlideElement)


const container = document.querySelector(".container")

const countSlides = mainSlideElements.length

sidebar.style.top = `-${(countSlides) * 100}vh`
let activeSlideIndex = 0

const downBtn = document.querySelector(".down-button")
const upBtn = document.querySelector(".up-button")

downBtn.addEventListener("click", () => {
    rollSlide("down")
})
upBtn.addEventListener("click", () => {
    rollSlide("up")
})
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        rollSlide("up")
    } else if (event.key === "ArrowDown") {
        rollSlide("down")
    }
})

function rollSlide(direction) {
    if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = countSlides
            loopSlider()
            activeSlideIndex = countSlides - 1
            transformSlider()
        } else {
            transformSlider()
        }
    } else if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex > countSlides) {
            activeSlideIndex = 0
            loopSlider()
            activeSlideIndex = 1
            transformSlider()
        } else {
            transformSlider()
        }
    }
}

function loopSlider() {
    const height = container.clientHeight
    mainSlide.style.transition = "transform 0s ease-in-out"
    sidebar.style.transition = "transform 0s ease-in-out"
    mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`
}


function transformSlider() {
    const height = container.clientHeight
    mainSlide.style.transition = "transform 0.5s ease-in-out"
    sidebar.style.transition = "transform 0.5s ease-in-out"
    mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`
}