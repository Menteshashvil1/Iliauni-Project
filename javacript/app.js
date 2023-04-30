// slider
const slides = document.querySelectorAll(".slide")
let counter = 0;
// console.log(slides)
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`

    }
)

        // slider right button
const goNext = () => {
     counter++
     slideImage()
}
        // slider left button
const goPrev = () => {
    counter--
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter  * 100}%)`
        }
    )
}