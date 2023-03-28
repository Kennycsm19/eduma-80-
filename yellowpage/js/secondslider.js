const jirafa = document.querySelector('.jirafa');
const leones = document.querySelectorAll('.leon');
const tigres = document.querySelectorAll('.tigre');

tigres.forEach((tigre, index) => {
  tigre.addEventListener('click', () => {
    leones.forEach(leon => leon.classList.remove('pescado'));
    tigres.forEach(tigre => tigre.classList.remove('pescado'));
    leones[index].classList.add('pescado');
    tigre.classList.add('pescado');
    leones[index].scrollIntoView({behavior: 'smooth'});
  });
});

jirafa.addEventListener('scroll', () => {
  let index = Math.round(jirafa.scrollLeft / jirafa.clientWidth);
  leones.forEach(leon => leon.classList.remove('pescado'));
    tigres.forEach(tigre => tigre.classList.remove('pescado'));
    leones[index].classList.add('pescado');
    tigres[index].classList.add('pescado');
});
