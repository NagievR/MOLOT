const main = document.querySelector('.main');

const scrollControl = () => {
  const mainPadding = 150;
  console.log(main.scrollHeight + 150);

  document.addEventListener('scroll', handler, { passive: false });
};

const handler = e => { 
  const mainFullHeigth = main.scrollHeight + 150;
  const currScroll = window.pageYOffset + document.documentElement.clientHeight ;
  const strip =  document.querySelector('.main__strip-wrap');

  console.log(currScroll, mainFullHeigth);

  if (currScroll > mainFullHeigth) {
    // e.preventDefault();
    scrollTo(0, mainFullHeigth - document.documentElement.clientHeight);

    strip.scrollBy(0, 20);
  }


};


export default scrollControl;
