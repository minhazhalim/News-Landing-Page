import './scss/style.scss';
const body = document.querySelector('body');
const main = document.querySelector('main');
const buttonOpen = document.querySelector('#buttonOpen');
const buttonClose = document.querySelector('#buttonClose');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__Overlay');
const media = window.matchMedia('(width < 69.375em)');
function openMobileMenu(){
  buttonOpen.setAttribute('aria-expanded','true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert',"");
  buttonClose.focus();
}
function closeMobileMenu(){
  buttonOpen.setAttribute('aria-expanded','false');
  body.classList.remove('noscroll');
  navContent.setAttribute('inert',"");
  main.removeAttribute('inert');
  buttonOpen.focus();
}
function setupNav(event){
  if(event.matches){
    navContent.setAttribute('inert',"");
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    },500);
  }else{
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
    navContent.style.display = "";
  }
}
setupNav(media);
buttonOpen.addEventListener('click',openMobileMenu);
buttonClose.addEventListener('click',closeMobileMenu);
media.addEventListener('change',function(event){
  setupNav(event);
});
document.addEventListener('keyup',(event) => {
  if(event.key == 'Tab') console.log(document.activeElement);
});