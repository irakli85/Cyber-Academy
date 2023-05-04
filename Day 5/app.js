let mainimage = document.querySelector('#img');
let images = ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png'];
let num = 0;

function next(){
    num++;
    if( num >= images.length){
        num = 0;
        mainimage.src = images[num];
    }else{
        mainimage.src = images[num];
    }
};

function back(){
    num--;
    if( num < 0){
        num = images.length - 1;
        mainimage.src = images[num];
    }else{
        mainimage.src = images[num];
    }
};

// setInterval(next, 2000);