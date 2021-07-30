const login = document.querySelector('.login__title');
const registration = document.querySelector('.registration__title');
const authorization = document.querySelector('.authorization');
const close = document.querySelector('.authorization__close');
const lock = document.querySelector('.page-header__avtor');
const loginForm = document.querySelector('.login__form');
const registrationForm = document.querySelector('.registration__form');
const header = document.querySelector('.page-header');
const main = document.querySelector('.page-main');

lock.addEventListener('click', ()=>{
  if(authorization.style.display === 'none'){
    authorization.style.display = 'block';
  }
  else{
    authorization.style.display = 'none';

  }
});

close.addEventListener('click', ()=>{
  authorization.style.display = 'none';
});

const openForm = (title, form) => {
  title.addEventListener('click', () => {
    if(form.style.display === 'none'){
      form.style.display = 'block';
    }
    else{
      form.style.display = 'none';
    }
  })
}
openForm(login, loginForm);
openForm(registration, registrationForm);
