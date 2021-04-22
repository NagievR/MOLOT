const textarea = document.querySelector('.chat__textarea');
const messageText = document.querySelector('.chat__message-text');
const bottomBorderWidth = parseInt(getComputedStyle(textarea).borderBottomWidth);
const topBorderWidth = parseInt(getComputedStyle(textarea).borderTopWidth);
const bordersHorizontal = bottomBorderWidth + topBorderWidth;

export const expandTextarea = () => {

  const resize = () => {
    const scrollHeight = textarea.scrollHeight;
    console.log(scrollHeight)
    textarea.style.height = scrollHeight + bordersHorizontal + 'px';
  
    if (!textarea.value) {
      textarea.style.height = '';
    }
  };
  
  textarea.addEventListener('input', resize);
  
  resize();
};

