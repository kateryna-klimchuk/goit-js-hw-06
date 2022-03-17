
const form = document.querySelector('.login-form');

const onSubmitForm = (event) => {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert('Please, fill all fields!');
    }

    console.log(`{email: ${email.value}, password: ${password.value}}`);
    event.currentTarget.reset();
}


form.addEventListener('submit', onSubmitForm)
