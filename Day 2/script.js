$(document).ready(function(){

    const items = [
        {id: 1, name:'bmw', src: './src/1.jpg'},
        {id: 2, name:'mercedes', src: './src/2.jpg'},
        {id: 3, name:'toyota', src: './src/3.jpg'},
        {id: 4, name:'chevrolet', src: './src/4.jpg'},
        {id: 5, name:'alfa rome', src: './src/5.jpg'},
        {id: 6, name:'maserati', src: './src/6.jpg'}
    ]

    items.forEach(item => {
        const itemCard = `
            <div class="item-class">
            
                <img src='${item.src}'/>
                <button> ${item.name}</button>
            </div>
        `;
        $('.carousel').append(itemCard);
    })

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
    })


})