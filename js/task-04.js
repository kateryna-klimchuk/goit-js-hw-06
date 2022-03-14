let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]')

const incrementBtn = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')
valueEl.textContent = counterValue;

const onDecrementClick = (event) => {
    valueEl.textContent = counterValue -= 1; 
}

const onIncrementClick = () => {
    valueEl.textContent = counterValue += 1; 
}

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick)
