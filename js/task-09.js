function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const onButtonClick = () => {
  console.log(textEl.textContent);
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;
}

buttonEl.addEventListener('click', onButtonClick);
