const toggleDiver = document.querySelector('.toggle');
const informBlock = document.querySelector('.inform-block');
const toggleDiverL = document.querySelector('.toggle__button-left');
const toggleDiverR = document.querySelector('.toggle__button-right');

toggleDiver.addEventListener('click', () => {
  if(informBlock.style.display === 'none'){
    informBlock.style.display = 'flex';
    toggleDiverL.style.transform = 'rotate(38deg)';
    toggleDiverR.style.transform = 'rotate(-38deg)';
    toggleDiver.style.bottom = '157px';
  }
  else{
    informBlock.style.display = 'none';
    toggleDiverL.style.transform = 'rotate(-38deg)';
    toggleDiverR.style.transform = 'rotate(38deg)';
    toggleDiver.style.bottom = '-15px';
  }
})
