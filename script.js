let offset = 0;
const sliderLine = document.querySelector('.slider-line');

 document.querySelector('.btn-next').addEventListener('click', function() {
    offset = offset + 300;
    if (offset > 1800){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
 });


 document.querySelector('.btn-prev').addEventListener('click', function() {
    offset = offset - 300;
    if (offset < 0){
        offset = 1800;
    }
    sliderLine.style.left = -offset + 'px';
 });

