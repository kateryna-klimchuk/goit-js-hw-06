// 1. Создай переменную counterValue в которой 
// будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, 
// внутри которых увеличивай или уменьшай 
// значение счтетчика.
// 3. Обновляй интерфейс новым значением 
// переменной counterValue.

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
