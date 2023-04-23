var openmodal = document.querySelector('.btn');

var modal = document.querySelector('.contain__modal');

var closemodal = document.querySelector('.btn__close');

openmodal.addEventListener('click', ()=>{
modal.classList.add('modal--2')
})


closemodal.addEventListener('click', ()=>{
modal.classList.remove('modal--2')
})