const form = document.querySelector('#validation-input');

const onSymbolNumberChecked = () => {
    if (form.value.length === 6) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    } else {
        form.classList.add('invalid');
        form.classList.remove('valid')
    };
}

form.addEventListener('blur', onSymbolNumberChecked);