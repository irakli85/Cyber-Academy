document.addEventListener('DOMContentLoaded',
function(){
    const slides = document.querySelector('.slides');
    const prevBtn = document.getElementById('btnPrev');
    const nextBtn = document.getElementById('btnNxt');
    var currentSlide = 0;
    const slideCounter = slides.children.length;

    function goToSlide(slideIndex){
        if(slideIndex < 0){
            currentSlide = slideCounter - 1;
        }else if(slideIndex >= slideCounter){
            currentSlide = 0;
        }else{
            currentSlide = slideIndex;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1)
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1)
    });

    goToSlide(0);
})