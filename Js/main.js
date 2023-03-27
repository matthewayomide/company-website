/* window.addEventListener('scroll',() => {
    document.querySelector('.header-1').classList.toggle('fixedbar',window.scrollY > 0);
}) */

  $(window).scroll(function (){
    var scrl = $(window).scrollTop();
    if(scrl < 60){
        $('.header-1').removeClass('fixedbar');
    }
    else{
        $('.header-1').addClass('fixedbar');
    }
 })
/*
 var slideIndex = 1;
 showSlides(slideIndex);
 function plusSlides(n){
    showSlides(slideIndex += n);
 }

 function showSlides(n){
 var i;
 var slides = document.getElementsByClassName('myslides');
 if(slideIndex > slides.length){
    slides = 0;
 }
 if(n < 1 ){
    slideIndex = slides.length;
 }
for (i = 0 ; i < slides.length; i++){
    slides[i].style.display ='none'
}
 slides[slideIndex - 1].style.display= 'block'; 
 }
 */

 var slideIndex = 0;
 var slides = document.querySelectorAll('.myslides');
 var PreV =document.querySelector('.prev');
 var nexT =document.querySelector('.next');
let auto = true;
let intervalTime = 3000;
let interval ;
 function NextSlide(){
    slides[slideIndex].classList.remove('activeSlide');
    slideIndex =(slideIndex + 1) % slides.length;
    console.log(slideIndex);
    slides[slideIndex].classList.add('activeSlide');
 }
 console.log((0 + 1)% slides.length);
 console.log(2 % 3);
 
 nexT.addEventListener('click',() =>{
    NextSlide()
    if(auto){
        clearInterval(interval);
     interval= setInterval(NextSlide,intervalTime);   
    }
 });
console.log(slides.length);
console.log(2% 3);
 function PrevSlide(){
    slides[slideIndex].classList.remove('activeSlide');
    slideIndex=(slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add('activeSlide');
 }

 PreV.addEventListener('click',() =>{
    PrevSlide();
    if(auto){
        clearInterval(interval)
        interval =setInterval(NextSlide,intervalTime)
    }
 })

 if (auto){
    //for automatic slide
 interval =setInterval(NextSlide,intervalTime);
 }
