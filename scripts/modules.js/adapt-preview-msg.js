const previewMessages = document.querySelectorAll('.recent__preview-message');
const dialogWrap = document.querySelector('.recent__dialog-wrap');
const maxTextLength = 30;

const maxWidth = parseInt(getComputedStyle(dialogWrap).width - 70);

export const adaptPreviewMsg = () => {
  previewMessages.forEach(msg => {
    console.log( parseInt(getComputedStyle(msg).width) );
    

  });
};

