const pageHeader = document.querySelector('.page-header');
const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.page-header__burger');
const closeBurger = document.querySelector('.page-header__burger-span');

burger.addEventListener('click', ()=>{
  if(navigation.style.display === 'none'){
    navigation.style.display = 'block';
    closeBurger.classList.add("page-header__x-burger");
  }
  else{
    navigation.style.display = 'none';
    closeBurger.classList.remove("page-header__x-burger");
    console.log(screen.width);
  }
});

document.addEventListener("DOMContentLoaded", function(event){
  window.onresize = function() {
    if(screen.width >= 768){
      navigation.style.display = 'block';
    }
    else{
      navigation.style.display = 'none';
      closeBurger.classList.remove("page-header__x-burger");
    }
  }
});
