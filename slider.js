const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

/*mover las imagenes derecha*/
function Next(){
    let sliderSectionFirstt =  document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirstt);
        slider.style.marginleft = "-100%";
    },500);
    
}

/*mover las imagenes izquierda*/
function prev(){
    let sliderSection =  document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginleft = "-100%";
    },500);
    
}
btnLeft.addEventListener('click', function(){
    prev();
})

btnRight.addEventListener('click', function(){
    Next();
})

setInterval(function(){
    Next();
},5000);

