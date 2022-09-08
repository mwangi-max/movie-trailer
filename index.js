const openBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-icon');
const video = document.querySelector('video');
const container = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', ()=>{
    preloader.classList.add('no-display');
})

openBtn.addEventListener('click', ()=>{
   container.classList.remove('active');
});
closeBtn.addEventListener('click', ()=>{
    container.classList.add('active');
    video.paused();
    video.currentTime = 0;
})