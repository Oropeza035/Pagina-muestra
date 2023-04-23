var modalbtn = document.querySelector('.info__rsp');

var modal = document.querySelector('.contain__info');

var modalClose = document.querySelector('.btn__close__modal');

var clck = document.querySelector('.enlace__click');



modalbtn.addEventListener('click', (e)=> {
	e.preventDefault()
	modal.classList.add('show__modal')
});

modalClose.addEventListener('click', (e)=> {
	e.preventDefault()
	modal.classList.remove('show__modal')
});


//SEGUNDA PARTE

var linkDow = document.querySelector('.btn__dow__link');

var linkCont = document.querySelector('.donw__sub');

var imgRot2 = document.querySelector('.img__rotate-1');



linkDow.addEventListener('click', (e)=> {
	e.preventDefault()
	linkCont.classList.toggle('donw__sub--2')
});


linkDow.addEventListener('click', (e)=> {
	e.preventDefault()
	imgRot2.classList.toggle('img__rotate--1')
});




var linkDow2 = document.querySelector('.btn__dow__link--2');

var linkCont2 = document.querySelector('.donw__sub--3');

var imgRot = document.querySelector('.img__rotate');

linkDow2.addEventListener('click', (e)=> {
	e.preventDefault()
	imgRot.classList.toggle('img__rotate--2')
});

linkDow2.addEventListener('click', (e)=> {
	e.preventDefault()
	linkCont2.classList.toggle('donw__sub--4')
})


var openmenu = document.querySelector('.opne__menu');
var menu = document.querySelector('.navegacion__sub__menu');

var closemenu = document.querySelector('.close--i');

openmenu.addEventListener('click', (e)=> {
e.preventDefault()
menu.classList.add('hows_1')

})

closemenu.addEventListener('click', (e)=> {
e.preventDefault()
menu.classList.remove('hows_1')

})