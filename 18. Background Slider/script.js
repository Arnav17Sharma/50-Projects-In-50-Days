const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 1;

console.log(slides)

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > slides.length - 1){activeSlide = 0;}
    setActiveSlide()
    setBgToBody()
})

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide === -1){activeSlide = slides.length - 1;}
    setActiveSlide()
    setBgToBody()
})