const recent = document.querySelector('.recent');
const chat = document.querySelector('.chat');
const bottomBlock = document.querySelector('.bottom-block');

const container = document.querySelector('.chat-page__container');
// recent.style.display = 'none';
// chat.style.display = 'block';

export const toggleMobileChat = () => {
  recent.addEventListener('click', () => {
    container.style.display = 'none';
    bottomBlock.style.display = 'none';

    recent.style.display = 'none';
    chat.style.display = 'block';
  });
};
