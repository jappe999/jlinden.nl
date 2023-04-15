const resizeables = document.querySelectorAll('.scroll-resize');

const onScroll = () => {
  const scale = 1 / ((window.scrollY + 1) / window.innerHeight + 1);
  resizeables.forEach((element) => element.style.transform = `scale(${scale})`);
}

document.addEventListener('scroll', () => requestAnimationFrame(onScroll));

requestAnimationFrame(onScroll);

const scrollAction = document.getElementById('scroll-down');

if (scrollAction){
  scrollAction.addEventListener('click', () => {
    const paddingTop = 164;
    window.scrollTo({
      top: window.innerHeight - paddingTop,
      behavior: "smooth"
    });
  });
}
