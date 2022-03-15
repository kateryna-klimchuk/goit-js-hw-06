
const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const onRangeChange = () => {
    textEl.style.fontSize = rangeEl.value + 'px';
    console.log(textEl.style.fontSize);
}

rangeEl.addEventListener('input', onRangeChange)