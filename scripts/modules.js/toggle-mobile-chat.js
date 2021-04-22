const recent = document.querySelector('.recent');
const chat = document.querySelector('.chat');
const bottomBlock = document.querySelector('.bottom-block');

const blockToHide = document.querySelector('.chat-page__header');
// recent.style.display = 'none';
// chat.style.display = 'block';

export const toggleMobileChat = () => {
  recent.addEventListener('click', () => {
    blockToHide.style.display = 'none';
    bottomBlock.style.display = 'none';

    recent.style.display = 'none';
    chat.style.display = 'block';
  });
};
