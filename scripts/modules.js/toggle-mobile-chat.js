const recent = document.querySelector('.recent');
const chat = document.querySelector('.chat');

// recent.style.display = 'none';
// chat.style.display = 'block';

export const toggleMobileChat = () => {
  recent.addEventListener('click', () => {
    console.log('ss');

    recent.style.display = 'none';
    chat.style.display = 'block';
  });
};
