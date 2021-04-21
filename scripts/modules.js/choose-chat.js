const chooseBtn = document.querySelector('.chat-page__mob-choose');
const menuLinks = document.querySelector('.bottom-block__menu-links');
const options = document.querySelector('.bottom-block__options');
const checkboxList = document.querySelectorAll('.recent__dialog-list .checkbox');

const chooseBntText = {
  done: 'Готово',
  choose: 'Выбрать'
};

const checkboxAction = {
  show: 'show',
  hide: 'hide'
};

export const chooseChat = () => {
  options.style.display = 'none';

  chooseBtn.addEventListener('click', () => {
    if (chooseBtn.innerText === chooseBntText.done) {
      chooseBtn.innerText = chooseBntText.choose;
      menuLinks.style.display = 'flex';
      options.style.display = 'none';
      toggleCheckboxList(checkboxAction.hide);

    } else if (chooseBtn.innerText === chooseBntText.choose) {
      chooseBtn.innerText = chooseBntText.done;
      menuLinks.style.display = 'none';
      options.style.display = 'flex';
      toggleCheckboxList(checkboxAction.show);
    }
  });
};

const toggleCheckboxList = action => {
  checkboxList.forEach(chbox => {
    if (action === checkboxAction.hide) {
      chbox.style.display = 'none';
    } else if (action === checkboxAction.show) {
      chbox.style.display = 'block';
    }
  });
};
