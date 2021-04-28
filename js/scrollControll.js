const main = document.querySelector('.main');
const strip =  document.querySelector('.main__strip-wrap');
// const mainFullHeight = main.scrollHeight;// + 150;

const mainPadding = 150;
const mainHeight = main.offsetHeight + mainPadding;

const scrollControl = () => {
  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('wheel', wheelHandler, { passive: false });
};

// const scrollHandler = e => {
//   const currScroll = window.pageYOffset + document.documentElement.clientHeight;

//   if (currScroll > 1846) {
    
//   }
  
//   // e.preventDefault();
// };

// const wheelHandler = e => {
//   // e.preventDefault();

//   // const currScroll = window.pageYOffset + document.documentElement.clientHeight;
//   // console.log(currScroll);
// };





const scrollHandler = () => { 
  const currScroll = window.pageYOffset + document.documentElement.clientHeight;

  if (currScroll >= mainHeight) {
    window.scrollTo(0, 1851 - document.documentElement.clientHeight);
  }

};

const wheelHandler = e => {
  // const settings = {
  //   mainHeight: main.offsetHeight,
  // };
  // console.log(settings.mainHeight);

  if (e.wheelDeltaY > 0) {
    handleWheelUp();
  } else {
    handleWheelDown();
  }
};

const handleWheelDown = e => {


  console.log('down');
};

const handleWheelUp = e => {
  
};


const wheelHandlerN = e => {  
  
  const currScroll = window.pageYOffset + document.documentElement.clientHeight;

  console.log(strip.scrollTop );

  if (strip.scrollTop === 1760) {
    console.log('remove');
    window.removeEventListener('scroll', scrollHandler);
    window.scrollTo({top: 2201 - document.documentElement.clientHeight, behavior: 'smooth'});
    return
  } 

  if (currScroll >= 1851 && !e.target.closest('.main__strip-wrap') && (e.wheelDeltaY < 0)) {
    console.log('*************');
    strip.scrollBy({ top: 580, behavior: 'smooth' });
    e.preventDefault();
  }

  if (strip.scrollTop !== 0 && (e.wheelDeltaY > 0) && !e.target.closest('.main__strip-wrap')) {
    e.preventDefault();
    strip.scrollBy({ top: -580, behavior: 'smooth' });
    console.log('top');
  }

};

export default scrollControl;
