const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const controls = document.querySelectorAll('.control');

carousel.addEventListener('scroll', () => {
  let index = Math.round(carousel.scrollLeft / carousel.offsetWidth);

  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');

  controls.forEach(control => control.classList.remove('active'));
  controls[index].classList.add('active');
});

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    carousel.scrollLeft = index * carousel.offsetWidth;

    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');

    controls.forEach(control => control.classList.remove('active'));
    controls[index].classList.add('active');
  });
});
