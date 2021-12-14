'use strict';
let modal=document.querySelector('.modal')
let overlay=document.querySelector('.overlay')
let closeModal=document.querySelector('.close-modal')
let showModal=document.querySelectorAll('.show-modal')
let showModel=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
  }
function closeModel() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }

for (let i=0;i<showModal.length;i++)
    showModal[i].addEventListener('click',showModel)
   
closeModal.addEventListener("click",closeModel)
overlay.addEventListener('click',closeModel)

document.addEventListener('keydown',function(e){
    if (e.key==='Escape' && !modal.classList.contains('hidden')){
            closeModel()
        }
    
})


