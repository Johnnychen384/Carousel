const carouselItems = document.getElementsByClassName("carousel-item")
console.log(carouselItems)
let carouselPositions = 0
const totalItems = carouselItems.length - 1;




document.getElementById('carousel-next').addEventListener('click', function(){
    
    if (carouselPositions === totalItems){
        carouselItems[carouselPositions].classList.remove('carousel-item-visible')
        carouselPositions = 0
        carouselItems[carouselPositions].classList.add('carousel-item-visible')
    } else {
        carouselItems[carouselPositions].classList.remove('carousel-item-visible')
        carouselPositions++
        carouselItems[carouselPositions].classList.add('carousel-item-visible')
    }
})

document.getElementById('carousel-prev').addEventListener('click', function(){
    if (carouselPositions === 0){
        carouselItems[carouselPositions].classList.remove('carousel-item-visible')
        carouselPositions = totalItems;
        carouselItems[carouselPositions].classList.add('carousel-item-visible')
    } else {
        carouselItems[carouselPositions].classList.remove('carousel-item-visible')
        carouselPositions--
        carouselItems[carouselPositions].classList.add('carousel-item-visible')
    }
})