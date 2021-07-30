document.querySelectorAll('.other-information__title').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('other-information__item--active');
  })
);
