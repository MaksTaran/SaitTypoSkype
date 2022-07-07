

window.onload = function () {
     
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
     document.body.classList.add('loaded');
     document.body.classList.remove('loaded_hiding');
   }, 1000);
 }

// function submenu() {
//     const submenu = document.querySelector('.submenu')
//     const trigger = document. querySelector('.widthSubMenu')
//     trigger.addEventListener('click', ()=>{
//     submenu.classList.toggle('active')
// })
// }