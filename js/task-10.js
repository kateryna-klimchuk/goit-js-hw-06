function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');


const createBoxes = (amount) => {
  amount = inputEl.value;

  let boxesArr = [];

  for (let i = 1; i <= amount; i += 1) {
    boxesArr.push(`<div style="width: ${30 + i*10}px; height: ${30 + i*10}px; background: ${getRandomHexColor()};"></div>`)
  }

  boxesEl.insertAdjacentHTML('afterbegin', boxesArr.join(''));
}


const onDestroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = null;
}

createBtnEl.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', onDestroyBoxes)



// -------second variant in progress... ------

// const firstBox = document.createElement('div');
//   firstBox.style.width = '30px';
//   firstBox.style.height = '30px';
//   firstBox.style.background = getRandomHexColor();


//   const commonWidth = Number.parseInt(firstBox.style.width) + Number(amount)*10 +'px';
//   const commonHeight = Number.parseInt(firstBox.style.height) + Number(amount)*10 +'px';

//   const secondBtn = document.createElement('div');
//   secondBtn.style.width = commonWidth;
//   secondBtn.style.height = commonHeight;
//   secondBtn.style.background = getRandomHexColor();