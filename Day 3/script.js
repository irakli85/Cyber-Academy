
$(document).ready(function(){
    var SliderCurrent = $('.slider img');
    var CurrentIndex = 0;
    var SliderSpeed = 3000;

    function nextImage(){
        //deletes active classes
        SliderCurrent.eq(CurrentIndex).removeClass('active');

        //deletes current index
        CurrentIndex = (CurrentIndex + 1) % SliderCurrent.length;

        //შემდეგ ფოტოზე აქტიური კლასის დამატება
        SliderCurrent.eq(CurrentIndex).addClass('active');
    }

    setInterval(nextImage, SliderSpeed);

    const items = [
        {id: 2,  src: './src/2.png', text: 'Solution'},
        {id: 1, src: './src/1.png', text: 'Speed Optimizer'},
        {id: 3,  src: './src/3.png', text: 'Online Marketing'},
        {id: 4,  src: './src/4.png', text: 'Website Design'},
        {id: 5,  src: './src/5.png', text: 'Solution'},
        {id: 6,  src: './src/6.png', text: 'Speed Optimizer'},
        {id: 7,  src: './src/7.png', text: 'Online Marketing'},
        {id: 8,  src: './src/8.png', text: 'Website Design'},
        {id: 9,  src: './src/9.png', text: 'Solution'}
    ]

    items.forEach(item => {
        const itemCard = `
            <div class="item-class">
            
                <img src='${item.src}'/>
                <p> ${item.text}</p>
                <a> MORE </a>
                
            </div>
        `;
        $('.carousel').append(itemCard);
    })

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    })
});